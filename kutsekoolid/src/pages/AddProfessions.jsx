import React, { useRef, useState, useEffect } from 'react'
// import schoolsFromFile from "../vocationalinstitutions.json"
import {Link} from "react-router-dom"
import { auth } from '../firebase'; // Lisa see
import { onAuthStateChanged } from 'firebase/auth';
import { Button, Alert, Container } from "react-bootstrap";
import { logout } from "../authService";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddProfessions() {
    const [message, setMessage] = useState("Lisa eriala");
    const [professions, setProfessions] = useState([]);
    const [schoolIndex, setSchoolIndex] = useState(0);
    const [user, setUser] = useState(null);
    const nameRef = useRef('');
    const urlRef = useRef('');
    const qualificationStandardRef = useRef('');
    const [logoutMessage, setLogoutMessage] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const handleLogout = async () => {
        await logout();
        setLogoutMessage("Oled edukalt välja logitud.");
        setTimeout(() => {
        navigate("/"); // suuna avalehele
        }, 1500);
    };
    
    const url = "https://front-end-production-46aa.up.railway.app/professions"

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoading(false); // nüüd on teada, kas user on olemas või mitte
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (!user) return;

        user.getIdToken().then(token => {
            fetch(url, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(json => setProfessions(json || []))
        .catch(err => console.error("Andmete laadimine ebaõnnestus:", err));
        });
    }, [user]);    

    const add = async () => {
        console.log("Add funktsioon käivitus");

    if (!user) {
      alert("Ainult sisselogitud kasutaja saab lisada");
      console.log("Kasutaja on null"); // <- See peab ka ilmuma, kui pole sisse logitud
      return;
    }

    if (!professions[schoolIndex]) {
        alert("Kooli ei leitud!");
        return;
    }


    const idToken = await user.getIdToken(); // get Firebase ID token
    console.log("Token:", idToken); // <- See logib tokeni välja

    if (!idToken) {
    console.error("ID-token puudub!");
    return;
    }
    console.log("Token olemas:", idToken);

    const newProfession = {
        name: nameRef.current.value,
        url: urlRef.current.value,
        qualificationStandard: qualificationStandardRef.current.value,
    };

        // Lisage uus eriala valitud kooli fields massiivi
    professions[schoolIndex].fields.push(newProfession);

    const urlWithAuth = "https://front-end-production-46aa.up.railway.app/professions"

    console.log("URL fetchiks:", urlWithAuth);

    fetch(urlWithAuth, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${idToken}`,
            },
        body: JSON.stringify(professions)
        })

        .then(res => {
            if (!res.ok) throw new Error(`Server error: ${res.status}`);
            return res.json();
        })
        .then(data => console.log("Success:", data))
        .catch(err => console.error("Viga:", err)); 

        

        setProfessions([...professions]); // Uuendage professionide olekut
        setMessage("Eriala lisatud");
        // Tühjendage sisestusväljad
        nameRef.current.value = '';
        urlRef.current.value = '';
        qualificationStandardRef.current.value = '';
    };

    const deleteProfession = (schoolIdx, fieldIdx) => {
    const updatedProfessions = [...professions];
    updatedProfessions[schoolIdx].fields.splice(fieldIdx, 1);

    setProfessions(updatedProfessions);

    user.getIdToken().then(token => {
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(updatedProfessions)
        })
        .then(res => {
            if (!res.ok) throw new Error("Viga serveri poolelt");
            return res.json();
        })
        .then(() => {
            toast.success("Kustutatud!");
        })
        .catch(err => {
            console.error("Kustutamine ebaõnnestus:", err);
            toast.error("Kustutamine ebaõnnestus");
        });
    });
};


    // const add = () => {
    //     schoolsFromFile.push(
    //        {
    //         "name": nameRef.current.value,
    //         "url": urlRef.current.value,
    //         "qualificationStandard": qualificationStandardRef.current.value,
    //        }
    //     )
    //     setProfessions(schoolsFromFile.slice());
    //     setMessage("Eriala lisatud");
    //     }
    if (loading) return <div>Laadimine...</div>;

  return (
    <div>        
        <br />
        {logoutMessage && <Alert variant="success">{logoutMessage}</Alert>}

        {user && (
        <Container style={{ padding: "2rem" }}>
          <h2>Tere, {user.email}!</h2>
          <Button variant="secondary" onClick={handleLogout}>
            Logi välja
          </Button>
        </Container>
      )}

        {/* <Button variant="secondary" onClick={handleLogout}>
            Logi välja
        </Button> */}
        <br /><br />

        <div>{message}</div>

        <select onChange={(e) => setSchoolIndex(Number(e.target.value))} value={schoolIndex}>
            {professions.map((school, index) => (
            <option key={index} value={index}>{school.name}</option>
            ))}
        </select><br /><br />
        <label>Eriala nimetus</label><br />
        <input ref={nameRef} type="text" /><br />
        <label>Eriala koduleht</label><br />
        <input ref={urlRef} type="url" /><br />
        <label>Eriala kutsestandard</label><br />
        <input ref={qualificationStandardRef} type="url" /><br />
        <Button variant="success" onClick={add}>Lisa</Button><br /><br />
        {professions.map((profession, profIndex) => (
                <div key={profIndex}>
                    <h3>{profession.name}</h3>
                    {profession.fields.map((field, index) => (
                        <div key={index}>
                            <div>{field.name}</div>
                            <a href={field.url} target="_blank" rel="noopener noreferrer">{field.url}</a> <br />
                            <a href={field.qualificationStandard} target="_blank" rel="noopener noreferrer">{field.qualificationStandard}</a>
                            <br />
                            <Link to= {"/change-professions/" + profIndex + "/" + index}>
                                <Button variant="primary" className="me-2">Muuda</Button>
                            </Link>
                            
                            <Button variant="danger" onClick={() => deleteProfession(profIndex, index)}>Kustuta</Button>
                            <br /><br />
                        </div>
                    ))}
                    
                </div>
            ))}

            <ToastContainer
                position="bottom-right"
                autoClose={4000}          
                theme="dark" />
    </div>
  )
}

export default AddProfessions