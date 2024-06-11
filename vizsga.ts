class RendezvenyKezelo {
    rendezvenyek: { nev: string; helyszin: string; ido: number; resztvevok: string[]; tematika: string; }[];
    constructor() {
      this.rendezvenyek = [];
    }
//RENDEZVÉNYEK

    ujRendezveny(nev: string, helyszin: string, ido: number, resztvevok: string[], tematika: string): void {
      const ujRendezveny = { nev, helyszin, ido, resztvevok, tematika };
      this.rendezvenyek.push(ujRendezveny);
      alert(`"${nev}" rendezvény sikeresen létrehozva.`);
    }
  
    rendezvenySzerkesztese(nev: string, ujRendezveny: { nev: string; helyszin: string; ido: number; resztvevok: string[]; tematika: string; }): void {
      const index = this.rendezvenyek.findIndex(rendezveny => rendezveny.nev === nev);
      if (index !== -1) {
        this.rendezvenyek[index] = ujRendezveny;
        alert(`"${nev}" rendezvény sikeresen szerkesztve.`);
      } else {
        alert(`Nincs ilyen nevű rendezvény: ${nev}`);
      }
    }
  
    rendezvenyTorlese(nev: string): void {
      this.rendezvenyek = this.rendezvenyek.filter(rendezveny => rendezveny.nev !== nev);
      alert(`"${nev}" rendezvény sikeresen törölve.`);
    }
//RÉSZTVEVŐK

    resztvevoEltavolitasa(nev: string, resztvevo: string): void {
      const rendezveny = this.rendezvenyek.find(rendezveny => rendezveny.nev === nev);
      if (rendezveny) {
        rendezveny.resztvevok = rendezveny.resztvevok.filter(r => r !== resztvevo);
        alert(`"${resztvevo}" résztvevő sikeresen eltávolítva a(z) "${nev}" rendezvényről.`);
      } else {
        alert(`Nincs ilyen nevű rendezvény: ${nev}`);
      }
    }
  
    resztvevokHozzaadasa(nev: string, resztvevo: string): void {
      const rendezveny = this.rendezvenyek.find(rendezveny => rendezveny.nev === nev);
      if (rendezveny) {
        rendezveny.resztvevok.push(resztvevo);
        alert(`"${resztvevo}" résztvevő sikeresen hozzáadva a(z) "${nev}" rendezvényhez.`);
      } else {
        alert(`Nincs ilyen nevű rendezvény: ${nev}`);
      }
    }
  
      };
    
  