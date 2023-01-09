import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const accordion_style = {
  bgcolor: "#444",
  width: "60%",
};

export default function ServiceAccordion() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Accordion sx={accordion_style}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Как вы работаете? Сколько времени занимает ремонт?
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ margin: "0 auto" }}>
          <Typography>
            <ol>
              <li>
                Прием устройства на ремонт; Проведение диагностики в течение 3-х
                рабочих дней;
              </li>
              <li>Согласование стоимости ремонта с клиентом;</li>
              <li>Проведение ремонта;</li>
              <li>Оповещение о готовности.</li>
            </ol>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={accordion_style}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Я не нашёл свою проблему в списке, что делать?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Вы можете описать свою проблему в форме заявки на ремонт или
            связаться с нами по номеру +7 (495) 120-35-20
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={accordion_style}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Могу ли я заранее узнать стоимость ремонта?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Да, окончательная стоимость ремонта согласуется с клиентом после
            диагностики и выявления неисправности. В эту цену уже входит
            стоимость работы и необходимых компонентов.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={accordion_style}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Как удостовериться, что мое устройство действительно починили?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            После гарантийного обслуживания вы получаете заключение от нашего
            сервисного центра и можете на месте проверить работоспособность
            своего устройства.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={accordion_style}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>На что распространяется гарантия?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Гарантия распространяется на работы и комплектующие сроком 6
            месяцев.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={accordion_style}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Какие запчасти вы используете?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            В работе мы используем только оригинальные комплектующие.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={accordion_style}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Сколько будет стоить доставка курьером HYPERPC?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Стоимость доставки по Москве составляет 750 ₽, доставка по
            Московской области составляет 750 ₽ + 40 руб/км от МКАД.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={accordion_style}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Я знаю, какая неисправность у моего устройства, зачем проводить
            диагностику?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Как показывает практика, утверждение о знании неисправности верно на
            50%. Часто, помимо основной неисправности имеются побочные, их нужно
            выявить и устранить.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
