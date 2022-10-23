import express from 'express';
import { getAllUsers, createUser, getUser, deleteUser, updateUser} from '../controllers/users.js';


const router = express.Router();


router.get('/', getAllUsers)

router.get('/:id', getUser)

router.post('/', createUser)

router.delete('/:id', deleteUser)


router.patch('/:id', updateUser)



// router.put('/:id', (req, res) => {

// })


export default router;