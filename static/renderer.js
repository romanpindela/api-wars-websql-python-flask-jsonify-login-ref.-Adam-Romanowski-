
export const tableHeaders = `
            <tr>
                <th>Name</th>
                <th>Diameter</th>
                <th>climate</th>
                <th>terrain</th>
                <th>surface water</th>
                <th>population</th>
                <th>residents</th>
            </tr>`;

export function createRow(planet) {
    return `<tr>
                <th>${planet.name}</th>
                <th>${planet.diameter}</th>
                <th>${planet.climate}</th>
                <th>${planet.terrain}</th>
                <th>${planet.surface_water}</th>
                <th>${planet.population}</th>
                <th id="${planet.name}"></th>
            </tr>`;
}

export const tableModalHeaders = `
            <table class="modal-table">
            <tr>
                <th>Name</th>
                <th>Height</th>
                <th>Mass</th>
                <th>Hair color</th>
                <th>Skin color</th>
                <th>Eye color</th>
                <th>Birth year</th>
                <th>Gender</th>
            </tr>`;

export function createModalRow(resident) {
    return `<tr>
                <th>${resident.name}</th>
                <th>${resident.height}</th>
                <th>${resident.mass}</th>
                <th>${resident.hair_color}</th>
                <th>${resident.skin_color}</th>
                <th>${resident.eye_color}</th>
                <th>${resident.birth_year}</th>
                <th>${resident.gender}</th>
            </tr>`;
}