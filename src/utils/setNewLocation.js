export function setNewLocationChecks(location, filter, newState) {
  let params = new URLSearchParams(location.search);
  const stateToArray = Object.entries(newState);
  //   console.log(stateToArray.filter((pair) => !pair[1]));

  params.delete(filter);
  params.delete(`${filter}_ne`);

  stateToArray.forEach(([key, pair]) => {
    if (filter === "rooms" || filter === "bath")
      key = valueToNumber(filter, key);

    if (!pair) params.append(`${filter}_ne`, key);
  });

  params = params.toString();
  return {
    pathname: location.pathname,
    search: params,
  };
}

export function setNewLocationMoreFilters(location, event) {
  let params = new URLSearchParams(location.search);

  event.checked ? params.set(event.name, "true") : params.delete(event.name);

  params = params.toString();
  return {
    pathname: location.pathname,
    search: params,
  };
}

export function setNewLocationSelect(location, filter, event) {
  let params = new URLSearchParams(location.search);

  params.set(filter, event);
  if (event === "indifferent") {
    params.delete(filter);
  }
  params = params.toString();
  return {
    pathname: location.pathname,
    search: params,
  };
}

export function setNewLocationPrice(location, range) {
  let params = new URLSearchParams(location.search);

  params.set("price_gte", range[0]);
  params.set("price_lte", range[1]);

  params = params.toString();
  return {
    pathname: location.pathname,
    search: params,
  };
}

export function setNewLocationInput(location, query) {
  let params = new URLSearchParams(location.search);

  params.set("q", query);
  params = params.toString();

  return {
    pathname: "/dashboard",
    search: params,
  };
}

function valueToNumber(filter, value) {
  switch (value) {
    case "zero":
      return 0;
    case "one":
      return 1;
    case "two":
      return 2;
    case "three":
      return 3;
    case "more":
      if (filter === "rooms") return 4;
      if (filter === "bath") return 3;
      break;
    default:
      break;
  }
}
