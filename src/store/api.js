import { client } from "./client";

export const fetchPopups = async () => await client.GET("/popups", null);

export const createPopup = async (popup) => await client.POST('/popups', popup);

export const updatePopup = async (id) => await client.PUT(`/popups/${id}`, null);

