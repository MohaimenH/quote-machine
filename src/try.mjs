import axios from "axios";

axios
    .get("https://www.comp.nus.edu.sg/~damithch/quotes/quote249.htm")
    .then((response) => console.log(response.data));
