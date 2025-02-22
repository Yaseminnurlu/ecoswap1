import "./Account";



const HomePage = () => {
    const AccountButton: React.FC = () => {
        const handleClick = () => {
          window.location.href = './Account'; // Redirect to the Account page
        };
        return <button onClick={handleClick}>Account</button>;
      };
      const ItemButton: React.FC = () => {
        const handleClick = () => {
          window.location.href = './addItem'; // Redirect to the Account page
        };
        return <button onClick={handleClick}>add Item</button>;
      };
      const HomeButton: React.FC = () => {
        const handleClick = () => {
          window.location.href = './Home'; // Redirect to the Account page
        };
        return <button onClick={handleClick}>Home</button>;
      };

    return (
        <>
        <div id = "top">
            <h1>EcoSwap</h1>
            <ItemButton/>
            <AccountButton/>
            <HomeButton/>
        </div>
        <div id = "list">
      
        </div>
        </>
    )
}

export default HomePage;