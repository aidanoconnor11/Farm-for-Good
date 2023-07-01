import './SignIn.css';
import {useState} from 'react'; 


const SignIn = () => {

    const initialFormData = {
        firstName: "", 
        lastName: ""
    }

    // const [formData, setFormDate] = useState(initialFormData);

    // const handleChange = (e) => {
    //     setFormData({...formData, 
    //         [e.target.firstName]:e.target.value.trim(),
    //         [e.target.lastName]:e.target.value.trim()
    //     });

    // }

    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); 
        alert("Successfully submitted!"); 
        console.log(`Name: ${firstName} ${lastName}`);
    }

    return (
        <div className="container">
            <div className="content-card">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">
                        {"First name: "} 
                        <input type="text"
                               value={firstName}
                               onChange={(e) => setFirstName(e.target.value)}
                         />
                    </label>
                    <br />
                    <label htmlFor="">
                       {"Last name: "}
                        <input type="text" 
                               value={lastName}
                               onChange={(e) => setLastName(e.target.value)}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div> 
        </div>

    );
}
 
export default SignIn;