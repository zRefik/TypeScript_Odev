class Logger {
  #logHistory: string[]=[];
    // private bir 'logHistory' dizisi tanımlayın

  log(message:string): void{
    console.log(message)
    this.#logHistory.push(message)
  }
    // 'log(message)' metodu: mesajı konsola yazsın VE history'ye eklesin

  getHistory(): string[]{
    return this.#logHistory
  }
    // 'getHistory()' metodu: history'yi döndürsün
}

const logger = new Logger();
logger.log("İlk log.");
logger.log("İkinci log.");

// console.log(logger.logHistory); // Bu satır private olduğu için HATA VERMELİ
console.log(logger.getHistory());

// BEKLENEN EKRAN ÇIKTISI:
// İlk log.
// İkinci log.
// [ 'İlk log.', 'İkinci log.' ]
