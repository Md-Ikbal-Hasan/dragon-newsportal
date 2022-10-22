import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log("email-pass user: ", user);
                form.reset();

                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success('please verify your email address')
                setError('');

            })
            .catch((error) => {
                console.error(error);
                setError(error.message)
            })

    }

    const handleAccepted = (e) => {
        console.log(e.target.checked)
        setAccepted(e.target.checked)
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch((error) => console.error(error))
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch((error) => console.error(error))
    }




    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label>Your Photo</Form.Label>
                <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    onClick={handleAccepted}
                    label={<> Accept <Link to='/terms'>Terms and Condition</Link> </>} />
            </Form.Group>


            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>

            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;