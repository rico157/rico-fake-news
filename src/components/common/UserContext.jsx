const UserContext = React.createContext('weegembump');

<UserContext.Provider value={'weegembump'}>
  <MyContext.Consumer>{(value) => console.log(value)}</MyContext.Consumer>
</UserContext.Provider>;

export default UserContext;
