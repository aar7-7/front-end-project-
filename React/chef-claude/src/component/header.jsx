import chefRobot from '../assets/chef-robot.png'

export default function Header() {
    return (
      <>
        <header className="header">
          <img src={chefRobot} alt="chef claude image" />
          <h1>Chef Cluade</h1>
        </header>
      </>
    );
}