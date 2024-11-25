document.addEventListener('DOMContentLoaded', function () {
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const codeInput = document.getElementById('code-input');
    const fileInput = document.getElementById('file-input');
    const submitBtn = document.getElementById('submit-btn');
    const backBtn = document.getElementById('back-btn');
    const previewFrame = document.getElementById('preview-frame');

    submitBtn.addEventListener('click', function () {
        let userCode = codeInput.value;

        // Si un fichier est uploadé
        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            const reader = new FileReader();
            reader.onload = function (e) {
                userCode = e.target.result;
                showPreview(userCode);
            };
            reader.readAsText(file);
        } else {
            // Si du code est collé
            showPreview(userCode);
        }
    });

    backBtn.addEventListener('click', function () {
        step1.classList.add('active');
        step2.classList.remove('active');
    });

    function showPreview(code) {
        // Construire une structure HTML de base
        const htmlStructure = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Preview</title>
                <style>
                /*FONTS*/
/*@font-face {
    font-family: "Sofia Pro Regular";
    src: url("https://www.marionnaud.fr/elab/mfr/2022/PAGES/ENGAGEMENT/ASSETS/styles/fonts/SofiaProRegular.woff2") format("woff2"),
        url("https://www.marionnaud.fr/elab/mfr/2022/PAGES/ENGAGEMENT/ASSETS/styles/fonts/SofiaProRegular.woff") format("woff");
}

@font-face {
    font-family: "Sofia Pro Medium";
    src: url("https://www.marionnaud.fr/elab/mfr/2022/PAGES/ENGAGEMENT/ASSETS/styles/fonts/SofiaPro-Medium.woff2") format("woff2"),
        url("https://www.marionnaud.fr/elab/mfr/2022/PAGES/ENGAGEMENT/ASSETS/styles/fonts/SofiaPro-Medium.woff") format("woff");
}

@font-face {
    font-family: "Sofia Pro Bold";
    src: url("https://www.marionnaud.fr/elab/mfr/2022/PAGES/ENGAGEMENT/ASSETS/styles/fonts/SofiaPro-Bold.woff2") format("woff2"),
        url("https://www.marionnaud.fr/elab/mfr/2022/PAGES/ENGAGEMENT/ASSETS/styles/fonts/SofiaPro-Bold.woff") format("woff");
}

@font-face {
    font-family: "Sofia Pro Light";
    src: url("https://www.marionnaud.fr/elab/mfr/2022/PAGES/ENGAGEMENT/ASSETS/styles/fonts/SofiaPro-Light.woff2") format("woff2"),
        url("https://www.marionnaud.fr/elab/mfr/2022/PAGES/ENGAGEMENT/ASSETS/styles/fonts/SofiaPro-Light.woff") format("woff");
}

@font-face {
    font-family: "Sofia Pro Semi-Bold";
    src: url("https://www.marionnaud.fr/elab/mfr/2022/PAGES/ENGAGEMENT/ASSETS/styles/fonts/SofiaPro-SemiBold.woff2") format("woff2"),
        url("https://www.marionnaud.fr/elab/mfr/2022/PAGES/ENGAGEMENT/ASSETS/styles/fonts/SSofiaPro-SemiBold.woff") format("woff");
}*/
/*FONTS*/
/*GENERAL CSS PAGE*/
* {
    font-family: 'Sofia Pro Regular';
}

main,
.breadcrumb-container {
    background-color: #FFF;
}

a,
a:hover,
a:after {
    text-decoration: inherit;
    color: inherit;
}
.bold{
    font-weight: bold;
}
.uppercase{
    text-transform: uppercase;
}
.highlight {
    box-shadow: inset 0 -22px 0 0 #EDE8FF;
    font-family: 'Sofia Pro Bold';
}

.highlight-2 {
    box-shadow: inset 0 -22px 0 0 #FFFFFF;
    font-family: 'Sofia Pro Bold';
}
section {
    padding: 10px 0;
}

.onlyMobile{
    display: block;
}
hr.desktop {
    display: none;
}

hr.mobile {
    display: block;
    border-top: 3px solid #000;
    width: 5%;
    /* margin-bottom: 20px;
    margin-top: 20px; */
}

.arrow-right {
    display: flex;
    width: 13px;
    height: 13px;
    border-top: 2px solid lightgrey;
    border-left: 2px solid lightgrey;
    transform: rotate(135deg);
}

.small_descr p {
    font-family: "MarionnaudParis RegularItalic";
    font-size: 16px;
    text-align: center;
}

/*TITRE*/
.h1_title {
    text-transform: uppercase;
    margin: 0;
    text-align: center;
    font-size: 28px;
    font-family: 'MarionnaudParis RegularItalic';
}
.h2_title {
    /* color: #8064db; */
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 2px;
    font-size: 22px;
}

.h1_title .alt_ff {
    text-transform: lowercase;
}
/* .text_banner span {
    font-family: "Times New Roman", "serif";
    font-style: italic;
    letter-spacing: 0px;
    font-size: 22px;
} */

.SEO_title {
    letter-spacing: 0px;
    font-size: 18px;
    margin-bottom: 10px;
    font-family: "Times New Roman", "serif";
    font-style: italic;
    text-align: center;
}

.text_SEO p {
    text-align: center;
}

.h2_title-v2 {
    letter-spacing: 0px;
    font-size: 22px;
    margin: 10px 0;
    text-align: center;
    font-family: 'MarionnaudParis RegularItalic';
    font-style: italic;
}

.container_text_center p {
    text-align: center;
}

/*TITRE*/
/*ETUQUETTE SUR IMAGE BLOC xN*/
.container_label {
    display: flex;
    justify-content: center;
}

.txt_on_image {
    position: absolute;
    text-align: center;
    color: black;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-left: 1em;
    margin-top: -5.5em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: white;
    height: 4em;
    text-transform: uppercase;
    width: 20em;
}

.txt_on_image_sm {
    position: absolute;
    text-align: center;
    color: black;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-left: 1em;
    margin-top: -5.5em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: white;
    height: 4em;
    text-transform: uppercase;
    width: auto;
    padding: 0 10px;
}

.adjust {
    padding-left: 3em;
}

/*ETUQUETTE SUR IMAGE BLOC xN*/
/*SEO*/
.addedText{
    display: none;
}
/*SEO*/
/*BUTTONS*/
.CTA_acces_rapides {
    width: 10em;
    height: 2.5em;
    font-size: 14px;
    border-radius: 22px;
    background-color: #EDE8FF;
    font-weight: bold;
    letter-spacing: 1px;
    color: #8064DB;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 5px;
}

.container-text-with-carrousel .cta_container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.aLink{
    color: #8064db;
    text-decoration: underline;
    font-family: 'Sofia Pro Regular';
    transition: ease-in 500ms;
}
.aLink:hover{
    cursor: pointer;
    text-decoration: underline;
}
.readMore, 
.readLess,
.aLink{
    color: #8064db;
    text-decoration: underline;
    font-family: 'Sofia Pro Regular';
    transition: ease-in 500ms;
}
.readMoreVariante, 
.readLessVariante{
    color: #000;
    font-family: 'Sofia Pro Regular';
    transition: ease-in 500ms;
}
.readMore:hover, 
.readLess:hover,
.aLink:hover{
    font-family: 'Sofia Pro Bold';
    cursor: pointer;
    text-decoration: underline;

}
.readMoreVariante:hover, 
.readLessVariante:hover{
    font-family: 'Sofia Pro Bold';
    cursor: pointer;
    text-decoration: underline;

}

.container_cta{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 15px 0;
}

.cta_black {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 14px;
    font-family: 'Sofia Pro Bold';
    width: auto;
    padding: 10px;
    letter-spacing: 1px;
    background-color: #000;
    color: #FFF;
    text-transform: uppercase;
    cursor: pointer;
}

.cta_white {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 14px;
    font-family: 'Sofia Pro Bold';
    width: auto;
    padding: 10px;
    letter-spacing: 1px;
    background-color: #FFF;
    color: #000;
    text-transform: uppercase;
    cursor: pointer;
    border: 1px solid #000;
}
.cta_purple {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 14px;
    font-family: 'Sofia Pro Bold';
    width: auto;
    padding: 10px;
    letter-spacing: 1px;
    background-color: #702082;
    color: #FFF;
    text-transform: uppercase;
    cursor: pointer;
}
.cta_black_alternatif {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 14px;
    font-family: 'Sofia Pro Bold';
    width: 20em;
    height: 40px;
    letter-spacing: 1px;
    border: 0.5px solid #FFF;
    background-color: #1C1C1C;
    color: #FFF;
    text-transform: uppercase;
    background-position: right bottom;
    transition: all .5s ease-out;
}
.xl_cta {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 14px;
    font-family: 'Sofia Pro Bold';
    width: 80%;
    height: 50px;
    padding: 0 30px;
    letter-spacing: 1px;
    background-color: #000;
    color: #FFF;
    text-transform: uppercase;
}
.container_text .container_cta{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
}
/*BUTTONS*/

/*SECTION*/
.section_2,.section_3,
.section_4,.section_5{
    margin: 2em 0;
}
/*SECTION*/
@media (min-width: 769px) {
    hr.mobile {
        display: none;
    }

    hr.desktop {
        display: block;
        border-top: 3px solid #000;
        width: 5%;
        margin-bottom: 10px;
        margin-top: 10px;
    }
    .onlyMobile{
        display: none;
    }
    /*TITLE*/
    .h1_title .alt_ff {
        font-family: 'MarionnaudParis RegularItalic';
        text-transform: lowercase;
        font-size: 35px;
        display: flex;
        justify-content: flex-start;
    }
    .h1_title .second_ff {
        font-family: 'MarionnaudParis TextBookItalic';
        font-size: 40px;
        display: flex;
        justify-content: flex-start;
    }
    .h2_title {
        font-size: 26px;
        margin-bottom: 10px;
        margin-top: 0;
    }

    .container_text_center p {
        text-align: left;
    }

    .small_descr p {
        font-size: 20px;
    }

    .h2_title-v2 {
        text-align: left;
        font-size: 22px;
        margin-bottom: 10px;
        margin-top: 0;
    }

    /*TITLE*/

    /*BUTTONS*/
    .xl_cta_desktop {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 14px;
        font-family: 'Sofia Pro Bold';
        width: 100%;
        height: 40px;
        padding: 0 30px;
        letter-spacing: 1px;
        background-color: #000;
        color: #FFF;
        text-transform: uppercase;
    }
    .container_text .container_cta{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 15px 0;
    }
    /*BUTTONS*/
}

/* GENERAL CSS PAGE */</style>
                </style>
            </head>
            <body>
                ${code}
            </body>
            </html>
        `;

        // Charger l'HTML dans l'iframe
        const previewDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
        previewDoc.open();
        previewDoc.write(htmlStructure);
        previewDoc.close();

        // Passer à l'étape 2
        step1.classList.remove('active');
        step2.classList.add('active');
    }

    // Rendre le texte modifiable dans l'iframe
    document.getElementById('preview-frame').addEventListener('load', function () {
        const iframe = document.getElementById('preview-frame');
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
        // Variables pour modifier l'image
        const modalImg = document.getElementById('image-modal');
        const form = document.getElementById('image-form');
        const imageUrlInput = document.getElementById('image-url');

        // Variables pour modifier l'image
        const modalTxt = document.getElementById('text-modify-modal');
        const fontSizeInput = document.getElementById('font-size');
        const textColorInput = document.getElementById('text-color');
        let currentImage = null;

        // Appliquer du CSS dans l'iframe
        const style = iframeDocument.createElement('style');
        style.innerHTML = `
            body {
                cursor: default; /* Désactive le curseur par défaut */
            }
            [contenteditable="true"] {
                cursor: text; /* Affiche le curseur de saisie seulement là où c'est modifiable */
            }
            img:hover {
                outline: 2px solid red; /* Ajoute une indication visuelle pour les images */
                cursor: pointer; /* Change le curseur sur les images */
            }
        `;
        iframeDocument.head.appendChild(style);

        // Gestion des événements dans l'iframe
        iframeDocument.body.addEventListener('mouseover', function (event) {
            const target = event.target;

            if (target.nodeType === Node.ELEMENT_NODE) {
                // Rendre les textes modifiables
                if (target.nodeType === Node.ELEMENT_NODE && target.tagName !== 'IMG') {
                    target.setAttribute('contenteditable', 'true');
                }
            }
        });

        iframeDocument.body.addEventListener('mouseout', function (event) {
            const target = event.target;

            // Désactiver l'édition lorsqu'on quitte un élément texte
            if (target.nodeType === Node.ELEMENT_NODE && target.tagName !== 'IMG') {
                target.setAttribute('contenteditable', 'false');
            }
        });

        // Ouvrir la modale au clic sur une image
        iframeDocument.body.addEventListener('click', function (event) {
            const target = event.target;

            if (target.tagName === 'IMG') {
                const htmlElement = document.documentElement; // Balise <html>
                currentImage = target;
                imageUrlInput.value = currentImage.src; // Pré-remplit l'URL actuelle de l'image
                modalImg.setAttribute('open', ''); // Affiche la modale
            }
        });

        // Gestion de la soumission du formulaire Modal Img
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            if (currentImage) {
                currentImage.src = imageUrlInput.value; // Met à jour la source de l'image
            }
            modalImg.removeAttribute('open'); // Ferme la modale
        });

        // Gestion de la fermeture de la modale img
        modalImg.querySelector('.close').addEventListener('click', function (event) {
            event.preventDefault();
            modalImg.removeAttribute('open'); // Ferme la modale
        });

        // Intercepter le clic droit pour afficher la modale
        iframeDocument.body.addEventListener('contextmenu', function (event) {
            const target = event.target;
            
            if (target.nodeType === Node.TEXT_NODE || target.nodeType === Node.ELEMENT_NODE) {
                event.preventDefault(); // Empêche le menu contextuel par défaut

                currentSelection = target;

                // Affiche la modale
                modalTxt.setAttribute('open', '');
                
                // Remplir les champs avec les valeurs actuelles de la sélection
                if (currentSelection.style.fontSize) {
                    fontSizeInput.value = parseInt(currentSelection.style.fontSize, 10);
                } else {
                    fontSizeInput.value = 16; // Taille par défaut
                }

                if (currentSelection.style.color) {
                    textColorInput.value = currentSelection.style.color;
                } else {
                    textColorInput.value = '#000000'; // Couleur par défaut
                }
            }
        });

        // Appliquer les changements (taille et couleur du texte)
        document.getElementById('apply-changes').addEventListener('click', function () {
            if (currentSelection) {
                // Appliquer les modifications
                currentSelection.style.fontSize = `${fontSizeInput.value}px`;
                currentSelection.style.color = textColorInput.value;
            }
            modalTxt.removeAttribute('open'); // Fermer la modale
        });

        // Fermer la modale
        document.getElementById('close-modal').addEventListener('click', function () {
            modalTxt.removeAttribute('open'); // Fermer la modale
        });
    });
    
    function removePreviewStyles(documentToClean) {
        const styles = documentToClean.querySelectorAll('style');
        styles.forEach(style => {
            if (style.innerHTML.includes('img:hover')) {
                style.remove(); // Supprime les styles de prévisualisation
            }
        });
    }
    document.getElementById('download-btn').addEventListener('click', function () {
        const iframe = document.getElementById('preview-frame');
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        // Supprimer les styles spécifiques à la prévisualisation
        removePreviewStyles(iframeDocument);

        // Récupérer le contenu HTML modifié
        const modifiedHTML = iframeDocument.documentElement.outerHTML;

        // Créer un Blob pour le fichier HTML
        const blob = new Blob([modifiedHTML], { type: 'text/html' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'modified-code.html';

        // Simuler un clic pour déclencher le téléchargement
        link.click();
    });

});
