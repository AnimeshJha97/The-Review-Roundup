// import express from "express";
// const router = express.router()

// import {
//     getAllTvSeries,
//     getTvSeries,
//     addTvSeries,
//     deleteAllTvSeries,
//     updateTvSeries,
//     createTvSeries
// } from "../controllers/tvSeriesController"

// import {isAuthenticatedUser, authorizeRoles} from "../middleware/authMiddleware"

// router
//     .route("/tvSeries")
//     .get(getAllTvSeries)

// router
//    .route("/tvSeries/:id")
//    .get(getTvSeries)

// router
//     .route("/admin/tvSeries")
//     .post(isAuthenticatedUser, authorizeRoles("admin"), addTvSeries)
//     .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteAllTvSeries)

// router
//     .route("/admin/tvSeries/:id")
//     .patch(isAuthenticatedUser, authorizeRoles("admin"), updateTvSeries)
//     .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteTvSeries)

// router
//    .route("/admin/tvSeries/new")
//    .post(isAuthenticatedUser, authorizeRoles("admin"), createTvSeries)

//    export default router;
