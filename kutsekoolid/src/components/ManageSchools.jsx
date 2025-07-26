import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../App.css';

import SchoolForm from "./SchoolForm";
import SchoolList from "./SchoolList";

function ManageSchools() {
  const [schools, setSchools] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editIndex, setEditIndex] = useState(null);

  const url = "https://front-end-production-46aa.up.railway.app/professions";

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;
    user.getIdToken().then((token) => {
      fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((json) => setSchools(json || []))
        .catch((err) => console.error("Laadimine ebaõnnestus:", err));
    });
  }, [user]);

  const saveSchools = (updatedSchools) => {
    if (!user) {
      toast.error("Palun logi sisse.");
      return;
    }
    user
      .getIdToken()
      .then((token) =>
        fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedSchools),
        })
      )
      .then((res) => {
        if (!res.ok) throw new Error("Serveri viga");
        return res.json();
      })
      .then(() => {
        setSchools(updatedSchools);
        toast.success("Andmed salvestatud!");
        setEditIndex(null);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Salvestamine ebaõnnestus.");
      });
  };

  if (loading) return <div>Laadimine...</div>;

  return (
    <div className='center' style={{ padding: "2rem" }}>
      <h2>Koolide haldus</h2>
      <SchoolForm
        schools={schools}
        saveSchools={saveSchools}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
      />
      <SchoolList
        schools={schools}
        setEditIndex={setEditIndex}
        saveSchools={saveSchools}
      />
      <ToastContainer position="bottom-right" autoClose={4000} theme="dark" />
    </div>
  );
}

export default ManageSchools;
