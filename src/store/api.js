import { client } from "./client";

export const fetchPopups = async () => await client.GET("/popups", null);

export const addPopup = async (popup) => await client.POST('/popups', popup);

export const getPopup = async (id) => await client.GET(`/popups/${id}`, null);
export const updatePopup = async (id, data) => await client.PUT(`/popups/${id}`, data);

