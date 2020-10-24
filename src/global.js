import { createGlobalStyle } from 'styled-components';
import profilepic from './assets/imgs/profilepic.png';

export const GlobalStyles = createGlobalStyle` 

@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap');

/* Global Styles */
:root {
  --dark-color: #333333;
  --dark-blue: #0e0c1b;
  --light-color: #f4f4f4;
  --light-gray-color: #bdc3c7;
  --dark-gray-color: #2c3e50;
  --color-tertiary: #c4bdc7;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  height: 100%;
  font-family: 'Quicksand', serif;
  font-size: 1rem;
  line-height: 1.6;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  margin-bottom: 6rem;
  transition: all 0.5s linear;
}

a {
  color: ${({ theme }) => theme.text};
  text-decoration: none;
}

a:hover {
  transform: translateY(-3px);
  box-shadow: 0 1rem 2rem rgba(black, 0.2);
}

ul {
  list-style: none;
}

img {
  width: 30%;
  height: auto;
}

/* Utilities */
.container {
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
}

/* Text Styles*/
/* .x-large {
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.large {
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.small {
  font-size: 0.5rem;
  line-height: 1.2;
  margin-bottom: 1rem;
} */

.text-dark {
  color: var(--dark-color);
}

.text-center {
  text-align: center;
}

/* Center All */
.all-center {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* Cards */
.card {
  padding: 1rem;
  border: #ccc 3px dashed;
  margin: 0.7rem 0;
}

/* Padding */
/* .p {
  padding: 0.5rem;
}
.p-1 {
  padding: 1rem;
}
.p-2 {
  padding: 2rem;
}
.p-3 {
  padding: 3rem;
}
.py {
  padding: 0.5rem 0;
}
.py-1 {
  padding: 1rem 0;
}

.px-1 {
  padding: 0 1rem;
}
.py-2 {
  padding: 2rem 0;
}
.py-3 {
  padding: 3rem 0;
} */

/* Margin */
.m {
  margin: 0.5rem;
}
.m-1 {
  margin: 1rem;
}
.m-2 {
  margin: 2rem;
}
.m-3 {
  margin: 3rem;
}

.mx-1 {
  margin-left: 0.5rem
}

.my {
  margin: 0.5rem 0;
}
.my-1 {
  margin: 1rem 0;
}
.my-2 {
  margin: 2rem 0;
}
.my-3 {
  margin: 3rem 0;
}

.my-top-1 {
  margin-top: 1rem;
}

.my-top-2 {
  margin-top: 2rem;
}

.my-top-3 {
  margin-top: 3rem;
}

.my-bot-1 {
  margin-bottom: 1rem;
}

.my-bot-2 {
  margin-bottom: 2rem;
}

.my-bot-3 {
  margin-bottom: 3rem;
}

/* Grid */
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

button {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  width: 20%;
  margin: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0.1rem 1rem;
  border-radius: 1rem;
  font-size: 1rem;
  font: inherit;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease-in;
  // outline: none;
}



.btn {
  display: inline-block;
  /* background: var(--light-color); */
  background: var(--light-gray-color);
  color: #333;
  padding: 0.2rem 1.1rem;
  border-radius: 1rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
}

.btn-narrow {
  display: inline-block;
  /* background: var(--light-color); */
  background: var(--light-gray-color);
  color: #333;
  padding: 0.2rem 0.7rem;
  border-radius: 1rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
}

.btn-narrower {
  display: inline-block;
  /* background: var(--light-color); */
  background: var(--light-gray-color);
  color: #333;
  padding: 0.2rem 0.6rem;
  border-radius: 1rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
}

.bg-light-gray {
  background: var(--light-gray-color);
  color: black;
}

.btn:hover {
  opacity: 0.8;
}

.btn:active {
  transform: translateY(-1px);
}

.link-animation {
  transform: translateY(-1px);
}

.round-img {
  border-radius: 50%;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  z-index: 1;
  width: 100%;
  margin-bottom: 0.3rem;
}

.navbar ul {
  display: flex;
  font-size: 1.6rem;
}

.navbar a {
color: ${({ theme }) => theme.text};
  padding: 0.45rem;
  margin: 0 0.25rem;
}

.navbar a:hover {
  color: var(--light-gray-color);
}

.navbar .welcome span {
  margin-right: 0.6rem;
}

/* Mobile Styles */
@media (max-width: 700px) {
  .hide-sm {
    display: none;
  }

  .column-pic {
    margin-top: 5rem;
  }

  .grid-2,
  .grid-3,
  .grid-4 {
    grid-template-columns: 1fr;
  }

  /* Text Styles */
  .x-large {
    font-size: 3rem;
  }

  .large {
    font-size: 2rem;
  }

  .lead {
    font-size: 1rem;
  }

  /* Navbar */
  .navbar {
    display: block;
    text-align: center;
  }

  .navbar ul {
    text-align: center;
    justify-content: center;
  }

  .center-logo {
    width: 100%;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
}

footer {
  font-size: 0.75rem;
  margin-bottom: 0;
  margin-top: 10px;
  padding-top: 5px;
  text-align: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.footer}
}

footer p {
  margin-bottom: 0;
  margin-top: 0;
  padding-bottom: 10px;
}

.contact-icons {
  padding: 3px;
  font-size: 1.5rem;
}

.profile-pic {
background-image: url(${profilepic});
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  height: 300px;
  width: 300px;
}

.big-logo {
  display: block;
  margin: auto;
  height: 15rem;
  width: 23rem;

  animation-name: moveInTop;
  animation-duration: 1s;
  animation-timing-function: ease-out;
}

.center-logo {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}

/* Animations */

@keyframes moveInTop {
  /* beginning of the animation */
  0% {
    opacity: 0;
    transform: translateY(-4rem);
  }

  /* end of the animation */
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media all and (max-width: 600px) {
  nav ul {
    flex-direction: column;
    flex-flow: column wrap;
  }
  nav ul li {
    text-align: center;
  }

  .center-logo {
    width: 100%;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -10%);
    text-align: center;
  }
}

`;
