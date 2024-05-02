const express = require("express");
const router = express.Router();
const {
  handleGetAllUsers,
  handleCreateNewUser,
  handleGetUniqueUser,
  handleUpdateUser,
  handleDeleteUser,
} = require("../controller/user");

/**
 * @swagger
 *  components:
 *      schemas:
 *          users:
 *               type: object
 *               properties:
 *                  _id:
 *                      type: string
 *                  firstName:
 *                            type: string
 *                  lastName:
 *                           type: string
 *                  email:
 *                        type: string
 *                  gender:
 *                        type: string
 *                  jobTitle:
 *                            type: string
 */

/**
 * @swagger
 * /api/users:
 *  get:
 *      summary: To get all users from mongodb
 *      description: This api is used to check if get method is working or not
 *      responses:
 *          200:
 *              description: To test Get method
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schemas/users'
 */

/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *      summary: To get a particular user from mongodb
 *      description: This api is used to check if get method with a parameter is working or not
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: ID required
 *            schema:
 *              type: string
 *      responses:
 *          200:
 *              description: To test Get method
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schemas/users'
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Used to create a new user and insert data to MongoDB
 *     description: This API is used to add data to MongoDB
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               email:
 *                 type: string
 *               gender:
 *                 type: string
 *               job_title:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Created user successfully
 *       '200':
 *         description: Added successfully
 */

/**
 * @swagger
 * /api/users/{id}:
 *   patch:
 *     summary: Update a user's information
 *     description: Update an existing user's information in the MongoDB database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *                 description: New first name of the user
 *               last_name:
 *                 type: string
 *                 description: New last name of the user
 *               email:
 *                 type: string
 *                 description: New email of the user
 *               gender:
 *                 type: string
 *                 description: New gender of the user
 *               job_title:
 *                 type: string
 *                 description: New job title of the user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to update
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: User updated successfully
 *       '404':
 *         description: User not found
 */

/**
 * @swagger
 * /api/users/{id}:
 *  delete:
 *      summary: To delete a particular user from mongodb
 *      description: This api is used to check if delete method with a parameter is working or not
 *      parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: ID required
 *            schema:
 *              type: string
 *      responses:
 *          200:
 *              description: To test delete method
 *              
 */

router.get("/", handleGetAllUsers);
router.post("/", handleCreateNewUser);
router.get("/:id", handleGetUniqueUser);
router.patch("/:id", handleUpdateUser);
router.delete("/:id", handleDeleteUser);

module.exports = router;
