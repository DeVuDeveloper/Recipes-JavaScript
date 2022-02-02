import './style.css';
import list from './modules/displayItems.js';
import getDataFromAPI from './modules/getDataFromAPI.js';

window.onload = async () => {
  list(await getDataFromAPI());
};

const Footer = () => {
  const footer = document.querySelector('footer');
  const currentYear = new Date().getFullYear();
  footer.innerHTML = `<footer>
                
                <span>&#169;</span> ${currentYear} Created by Microverse under CC License.
            </footer>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>`;
};


Footer();

window.onload = async () => {
  list(await getDataFromAPI());
};

