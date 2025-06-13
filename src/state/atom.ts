import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { IFiltroDeEventos } from "../interfaces/IFiltroDeEventos";

export const listaDeEventosState = atom<IEvento[]>({
    key:"listaDeEventos",
    default:[]
})

export const filtroDeEventosState = atom<IFiltroDeEventos>({
    key:"filtroDeEventos",
    default:{}
})
