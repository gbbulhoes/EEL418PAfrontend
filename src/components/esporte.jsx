//Componente referente a cada um dos esportes e, ao ser clicado, abre um menu com as modalidades

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useEffect, useState } from "react";
import api from "../services/api";
import Box from "@material-ui/core/Box";

import "../Styles/Esportes.css";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function Esporte({ children }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [modalidades, setModalidades] = useState([]);

  const getModalidades = async () => {
    const res = await api.get(`/modalidade/findByEsporte/${children}`);
    setModalidades(res.data);
    console.log("esporte");
    console.log(res.data);
  };

  useEffect(() => {
    if (anchorEl) {
      getModalidades();
    }
  }, [anchorEl]);

  return (
    <div>
      <Button
        id="botaoEsporte"
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        {children}
      </Button>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          {/*
                <ListItemIcon>
                    <SendIcon fontSize="small" />
                </ListItemIcon>
                */}
          <div className="listArea">
            <div className="list">
              <Box display="flex" flexDirection="column">
                {modalidades.map((item) => (
                  <div id="botaoModalidade">
                    <a
                      href={"/atletas/" + children + "/" + item.nome}
                      class="modalidade"
                    >
                      <ListItemText primary={item.nome} />
                    </a>
                  </div>
                ))}
              </Box>
            </div>
          </div>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
