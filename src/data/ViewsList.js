import Ecommerce from "../components/Views/Ecommerce";
import Segment from "../components/Views/Segment";
import Mortgage from "../components/Views/Mortgage";
import CarInsuranceClaim from "../components/Views/CarInsuranceClaim";
import Banner from "../components/Banner";
import Slides from "../components/Slides";
import FauxService from "../components/Views/FauxService";

const viewsList = [
  {
    industry: "Service",
    componentName: FauxService,
    label: "Service",
    key: "service",
  },
  {
    industry: "eCommerce",
    componentName: Ecommerce,
    label: "eCommerce",
    key: "ecommerce",
  },
  {
    industry: "segment",
    componentName: Segment,
    label: "Segment",
    key: "segment",
  },
  {
    industry: "Finance",
    componentName: CarInsuranceClaim,
    label: "Car Insurance Claim",
    key: "carInsuranceClaim",
  },
  {
    industry: "Finance",
    componentName: Mortgage,
    label: "Mortgage",
    key: "mortgage",
  },
  {
    industry: "Custom",
    componentName: Slides,
    label: "Google Slides",
    key: "slides",
  },
  {
    industry: "NO TASK",
    componentName: Banner,
    label: "Splash Screen",
    key: "banner",
  },
];

export default viewsList;
