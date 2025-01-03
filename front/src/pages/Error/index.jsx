import { useState } from 'react'

function Error404() {
    return (
        <section className="error_404 section_py">
            <h1 className="error_404_title">404</h1>
            <h2 className="error_404_subtitle">Oups! La page que vous demandez n'existe pas.</h2>
            <a className="error_404_link" href={"/"}>Retourner sur la page d'accueil</a>
        </section>
    );
}

export default Error404
