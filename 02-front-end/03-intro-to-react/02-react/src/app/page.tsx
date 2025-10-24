import React from "react";
import Link from "next/link";

export default function HomePage() {
  const fullName = "Andhika";

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Intro fullNameProps={fullName} />
      <br />
      <Curriculum />
    </>
  );
}

function Intro(props: { fullNameProps: string }) {
  return (
    <React.Fragment>
      <h1 className="title" style={{ color: "red" }}>
        Welcome to React, {props.fullNameProps}!
      </h1>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quam
        sit voluptas culpa quia ad delectus ut aliquid labore? Odit mollitia
        fugit tenetur reprehenderit. Distinctio impedit ipsam vel eveniet
        consequatur.
      </p>
    </React.Fragment>
  );
}

function Curriculum() {
  return (
    <ol>
      <li>JavaScript Fundamental</li>
      <li>Frontend Development</li>
      <li>Backend Development</li>
    </ol>
  );
}

/* ---------------------------------- NOTES --------------------------------- */
// Cara membuat komponen
// 1. Buat fungsi dengan format nama menggunakan PascalCase
// 2. Pastikan fungsinya me-return SATU HTML tag
// 3. Export default fungsi tersebut

/* ------------------------- Expression vs Statement ------------------------ */
// Expression (Kode yang langsung memberikan value)
// const a = 10
// null

// Statement ()
// if () { ... } else { ... }

/* ------------------------------------ - ----------------------------------- */
// Props: Cara untuk mengirim data dari parent komponen ke children
// Bentuk props adalah sebuah attribute costum

/* ------------------------------------ - ----------------------------------- */
// const props = {
//   fullNameProps: "Andhika",
// };
