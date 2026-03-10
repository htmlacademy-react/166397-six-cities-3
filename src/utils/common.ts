function getRaitingPercentage(raiting: number): string {
  return `${Math.round(raiting) / 5 * 100}%`;
}

function capitalizeValue(value: string): string {
  return value[0].toUpperCase() + value.slice(1, value.length);
}

export {getRaitingPercentage, capitalizeValue};
