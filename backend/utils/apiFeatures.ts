import { Document, Model, Query } from "mongoose";
import QueryString from "../interfaces/queryString.interface"

class APIFeatures<T extends Document, U extends Model<T>> {
    query: Query<T[], T>;
    queryString: QueryString;
    
    constructor(query: Query<T[], T>, queryString:QueryString){
        this.query = query;
        this.queryString = queryString
    }

    filter() {
        const queryObj = {...this.queryString}
        const excludedFields = ["page", "sort", "limit", "fields"]
        excludedFields.forEach(el => delete queryObj[el])

        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(
                        /\b(gte|gt|lte|lt)\b/g, 
                        match => `$${match}`
                    )
        
        this.query = this.query.find(JSON.parse(queryStr))
            
        return this;
    }

    sort() {
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        }
        else {
            this.query = this.query.sort('-createdAt')
        }

        return this;
    }

    limitFields() {
        if(this.queryString.fields){
            const fileds = this.queryString.fields.split(',').join(' ')
            this.query = this.query.select(fileds)
        }
        else {
            this.query = this.query.select('-__V')
        }

        return this
    }

    paginate() {
        const page = Number(this.queryString.page) || 1
        const limit = Number(this.queryString.limit) || 4
        const skip = (page-1) * 4

        this.query = this.query.skip(skip).limit(limit)

        return this
    }
}

export default APIFeatures