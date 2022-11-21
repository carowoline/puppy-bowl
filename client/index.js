import { fetchAllPlayers } from './ajaxHelpers'
import { renderAllPlayers, renderNewPlayerForm } from './renderHelpers'

export const init = async () => {
    const players = await fetchAllPlayers();
    renderAllPlayers(players);

    renderNewPlayerForm();
}

init()
