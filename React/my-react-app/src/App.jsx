function App() {
  return(
  <>
    <Header />
    <Page />
    <Fotter />
  </>
  ) 
  
}
export default App;
function Page() {
  return (
    <ol>
      <li>
        React is a popular library, so I will be able to fit in with all the
        coolest devs out there! 😎
      </li>
      <li>
        I am more likely to get a job as a front end developer if I know React
      </li>
    </ol>
  );
}
function Header(){
  return (
    <header>
      <img src="./assets/react.svg" alt="react logo" width='40px' />
      <h1>Reasons that i am learning react</h1>
    </header>
  );
}
function Fotter(){
  return <p>© 2025 aliasghar rahimi development. All rights reserved.</p>
}