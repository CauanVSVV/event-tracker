import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroDeEventos } from "../interfaces/IFiltroDeEventos";
import { eventosAsync } from "./seletores";

export const listaDeEventosState = atom<IEvento[]>({
    key:"listaDeEventos",
    default: eventosAsync
})

export const filtroDeEventosState = atom<IFiltroDeEventos>({
    key:"filtroDeEventos",
    default:{}
})
