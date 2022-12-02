import { useState } from "react";
import QuickRegister from "../../../components/forms/quick-register";
import {
  CaBritCouncil,
  CaStar,
  CaCambridgeAssessment,
  CaMinistryOfEducation,
  CaIelts,
  CaFacebook,
  CaInstagram,
  CaLinkedIn,
  CaYoutube,
  CaTiktok,
} from "../../../components/Icons";

import s from "./index.module.css";
import cn from "classnames";
function Footer() {
  const [count, setCount] = useState(0);

  return (
    <footer className={cn(s.root)}>
      <div className={cn(s.content, "container-padding")}>
        <div className={cn(s.innerContent, "container mx-auto")}>
          <div className="flex flex-col w-full container items-center gap-6 lg:flex-row justify-between relative z-[3]">
            <img
              alt={"logo"}
              className={s.image}
              src={"/images/logos/hero-logo.png"}
            />
            <div className="flex flex-row gap-[2px]">
              <a href="/#">
                <CaFacebook />
              </a>
              <a href="/#">
                <CaInstagram />
              </a>
              <a href="/#">
                <CaLinkedIn />
              </a>
              <a href="/#">
                <CaYoutube />
              </a>
              <a href="/#">
                <CaTiktok />
              </a>
            </div>
          </div>
          <p className={s.otherInformation}>
            www.edusogno.com - Realizzato con il 🧠 in 🇮🇹
          </p>
          <p className={s.copyright}>
            <p>Copyright © 2022 Edusogno. Tutti i diritti riservati.</p>

            <p>
              |&nbsp;<a href="/#">Privacy Policy</a>&nbsp;|&nbsp;
            </p>
            <p>
              <a href="/#">Cookie Policy</a>&nbsp;|
            </p>
            <p>P.IVA 08587960728</p>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
