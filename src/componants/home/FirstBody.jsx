import img1 from "./Body-imgs/HP_jabraTWS_19July2023_ahampu.webp";
import img2 from "./Body-imgs/HP_CromaIndulge_12July2023_wnxyxi.webp";
import img3 from "./Body-imgs/HP_GLF_KC_9july2023_oi660y.webp";
import img4 from "./Body-imgs/HP_OneplusNord35G_12July2023_vaixuk.webp";
import img5 from "./Body-imgs/HP_accessories_19July2023_aick27.webp";
import img6 from "./Body-imgs/HP_ceilingfans_19July2023_xdwmx4 (1).webp";

const FirstBody = () => {
  return (
    <div>
      <div className="FirstBody">
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div id="aa" class="carousel-inner">
            <div
              id="body-coro-div"
              class="carousel-item active"
              data-bs-interval="2000"
            >
              <img src={img1} class="d-block" className="body-img" alt="" />
            </div>
            <div
              id="body-coro-div"
              class="carousel-item"
              data-bs-interval="3000"
            >
              <img src={img2} class="d-block " className="body-img" alt=""/>
            </div>
            <div
              id="body-coro-div"
              class="carousel-item"
              data-bs-interval="2000"
            >
              <img src={img3} class="d-block w-100 " className="body-img" alt=""/>
            </div>
            <div
              id="body-coro-div"
              class="carousel-item"
              data-bs-interval="3000"
            >
              <img src={img4} class="d-block w-100 " className="body-img" alt="" />
            </div>
            <div
              id="body-coro-div"
              class="carousel-item"
              data-bs-interval="2000"
            >
              <img src={img5} class="d-block w-100 " className="body-img" alt="" />
            </div>
            <div
              id="body-coro-div"
              class="carousel-item"
              data-bs-interval="3000"
            >
              <img src={img6} class="d-block w-100 " className="body-img" alt=""/>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstBody;
