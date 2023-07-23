interface UserInterface {
    userName: string,
    userId: string,
    emali: string,
    authentication: {
        password: string,
        sessionToken: string
    }
    status: string,
    avatar: {
        url: string
    }
}
export default UserInterface