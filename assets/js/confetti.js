          // Sélectionner le bouton par son ID
            const confettiButton = document.getElementById('confettiButton');

        // Fonction pour lancer les confettis
        // function launchConfetti() {
        //     confetti({
        //         particleCount: 150,
        //         spread: 150,
        //         origin: { y: 0.6 },
        //         colors: ['#7c226e', '#ede7f4']
        //         // colors: ['#fbfafb', '#262f4c', '#e82c5f', '#f8c1ad']
        //     });
        // }

        function launchSnowConfetti() {
        const totalFlakes = 80;

        for (let i = 0; i < totalFlakes; i++) {
                // Délai aléatoire pour l'apparition des confettis
                setTimeout(() => {
                    confetti({
                        particleCount: 3,
                        startVelocity: Math.random() * 3 + 2,  // Vitesse initiale aléatoire entre 2 et 5
                        ticks: 200,  // Durée plus longue
                        spread: 60,  // Dispersion des particules
                        origin: { y: 0, x: Math.random() },  // Partir du haut avec une position x aléatoire
                        gravity: 1.3,  // Gravité plus faible pour une chute lente
                        colors: ['#7c226e', '#ede7f4'],  // Couleur blanche pour ressembler à des flocons de neige
                        shapes: ['circle', 'square', 'star'],  // Forme des particules
                    });
                }, Math.random() * 5000); // Délai entre 0 et 5000 ms pour des apparitions aléatoires
            }
        }

        // Ajouter un écouteur d'événement pour le clic sur le bouton
        confettiButton.addEventListener('click', () => {
            console.log('Confetti button clicked');
            launchSnowConfetti();
        });

        // Lancer l'animation au chargement de la page
        // document.addEventListener('DOMContentLoaded', (event) => {
        //     launchSnowConfetti();
        //     console.log("The page is loaded, so confetti should work !");
        // });

        var add = document.getElementById("add");

        function addText(){
            add.innerHTML = "Ce test pourrait être ajouté sur du contenu des pages Marionnaud.";
        }