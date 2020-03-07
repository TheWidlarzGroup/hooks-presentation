  
export const oldState = `
class Clicker extends React.Component {
    constructor(props) {
      super(props);
      this.state = { clicks: 0 };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ clicks: this.state.clicks + 1 });
    }

    render() {
      return (
        <button onClick={this.handleClick}>Clicked { clicks } times</button>
      );
    }
}`
  
export const setState = `
class Clicker extends React.Component {
    state = { clicks: 0 }

    handleClick = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }

    render() {
      return (
        <button onClick={this.handleClick}>Clicked { clicks } times</button>
      );
    }
}`

export const useState = `
const Clicker = () => {
    const [clicks, setClicks] = useState(0)
    const handleButtonClick = () => {
        setClicks(clicks + 1)
    }

    return (
        <button onClick={handleButtonClick}>Clicked { clicks } times</button>
    )
}`

export const intersujeNasUseState = `
useState
`

export const syntaxUseState = `
const [clicks, setClicks] = useState(0)
`

export const wiecejStatowUse = `
const [clicks, setClicks] = useState(0)
const [cosInnego, setCosInnego] = useState(0)
`

export const wiecejStateowNieUse = `
state = { clicks: 0, cosInnego: 0 }

handleClick = () => {
    this.setState({ clicks: this.state.clicks + 1 });
}

handleCosInnego= () => {
    this.setState({ cosInnego: this.state.cosInnego - 1 });
}
`

export const innaczejUseState = `
const Clicker = () => {
  const [clicks, setClicks] = useState(0)
  const handleButtonClick = () => {
      setClicks(c => c + 1)
  }

  return (
      <button onClick={handleButtonClick}>Clicked { clicks } times</button>
  )
}`

export const lazyUseState = `
const Clicker = () => {
  const [clicks, setClicks] = useState(() => {
      const initialState = someExpensiveComputation(props)
      return initialState
    }    
  )
  
  const handleButtonClick = () => {
      setClicks(c => c + 1)
  }

  return (
      <button onClick={handleButtonClick}>Clicked { clicks } times</button>
  )
}`


export const czystaFunkcja = `
const Czysciutko = (a, b) => a + b
`

export const hoverCode = `
const Contact = (contact) => {
  const [hover, setHover] = useState(false);

  const showDetails = () => setHover(true);
  const hideDetails = () => setHover(false);
...
`

export const filtrowaniePoImieniu = `
const [inputValue, setInputValue] = useState("");
...
const filteredContacts = fullName.toLowerCase().includes(inputValue.toLowerCase());
...
<SearchBar inputValue={inputValue} setInputValue={setInputValue} />
<ContactList contacts={filteredContacts} />
...
`

export const oficjalnieUseEffect = `
function Example() {
  const [count, setCount] = useState(0);

  // Podobnie do metod componentDidMount i componentDidUpdate:
  useEffect(() => {
    // Zaktualizuj tytuł dokumentu korzystając z interfejsu API przeglądarki
    document.title = count
  });

  return (
    <div>
      <p>Kliknięto {count} razy</p>
      <button onClick={() => setCount(count + 1)}>
        Kliknij mnie
      </button>
    </div>
  );
}
`

export const syntaxUseEffect = `
  useEffect(() => {
    // Tutaj czarujesz
    document.title = count

    return function cleanup() {
      // tutaj czyścisz kociołek 
    }
  }, 
  [
    // array składników
  ]);
`


export const przykladowoUseEffectSub = `
useEffect(() => {
  // ...
  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  return () => {
    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  };
});
` 

export const przykladowoUseEffectDeps = `
  useEffect(() => {
    document.title = count
  }, [count])
` 

export const kilkaUseEffect = `
function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count
  }, [count]);

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  return (
    <div>
      <p>Kliknięto {count} razy</p>
      <button onClick={() => setCount(count + 1)}>
        Kliknij mnie
      </button>
    </div>
  );
}
`


export const jaChceTylkoRaz = `
function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count
  }, []);

  return (
    <div>
      <p>Kliknięto {count} razy</p>
      <button onClick={() => setCount(count + 1)}>
        Kliknij mnie
      </button>
    </div>
  );
}
`

export const useEffectRozwiazanie = `
const Example = () => {
  const [inputValue, setInputValue] = useState('');
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const doFetch = async (amount) => {
    try {
      setLoading(true);
      const res = await fetch('https://randomuser.me/api/?results=$amount'); // dodaj klamerki
      const json = await res.json();
      const results = json.results;
      setContacts(state => [...state, ...results]);
    } catch (error) {
      setError('We have an $error'); // dodaj klamerki
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    doFetch(5);
  }, []);
  ...
`

export const useFavCustom = `
const [fav, setFav] = useFavouriteContact();
`

export const useFavCode = `
export const useFavouriteContact = () => {
  const [saved, setSaved] = useState(() => {
    const valueFromLocal = localStorage.getItem("fav");

    if (!valueFromLocal) {
      localStorage.setItem("fav", "");
    }

    return valueFromLocal ? valueFromLocal : "";
  });

  const update = (value) => {
    localStorage.setItem("fav", value);
    setSaved(value);
  };

  return [saved, update];
};
`