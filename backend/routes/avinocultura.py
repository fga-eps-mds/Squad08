from enum import Enum
from fastapi import APIRouter, HTTPException
from config.db import fetch_one
from script.models import ChartData

avicultura = APIRouter(prefix="/avinocultura")
collection = "AVICULTURA"

class Code(str, Enum):
    poedeiras = "1988"
    ovos_produzidos = "29"
    producao_consumo = "9588"
    producao_incubacao = "9589"
    populacao = "2209"

@avicultura.get("/{code}", tags=["avicultura"])
async def dados_avicultura(code : Code) -> ChartData:
    """
    **Code**
    -   1988    : Número de cabeças de galinhas poeiras
    -   29      : Quantidade de ovos produzidos
    -   9588    : Quantidade de ovos produzidos para consumo
    -   9589    : Quantidade de ovos produzidos para incubação
    -   2209    : Número de cabeças
    """
    search = {"id" : code.value}
    response = await fetch_one(collection, search)
    if response is None:
        raise HTTPException(status_code=404)
    ibge_data : ChartData = ChartData(**response)
    return ibge_data
