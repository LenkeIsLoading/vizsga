"use strict";
class RendezvenyKezelo {
    constructor() {
        this.rendezvenyek = [];
    }
    //RENDEZVÉNYEK
    ujRendezveny(nev, helyszin, ido, resztvevok, tematika) {
        const ujRendezveny = { nev, helyszin, ido, resztvevok, tematika };
        this.rendezvenyek.push(ujRendezveny);
        alert(`"${nev}" rendezvény sikeresen létrehozva.`);
    }
    rendezvenySzerkesztese(nev, ujRendezveny) {
        const index = this.rendezvenyek.findIndex(rendezveny => rendezveny.nev === nev);
        if (index !== -1) {
            this.rendezvenyek[index] = ujRendezveny;
            alert(`"${nev}" rendezvény sikeresen szerkesztve.`);
        }
        else {
            alert(`Nincs ilyen nevű rendezvény: ${nev}`);
        }
    }
    rendezvenyTorlese(nev) {
        this.rendezvenyek = this.rendezvenyek.filter(rendezveny => rendezveny.nev !== nev);
        alert(`"${nev}" rendezvény sikeresen törölve.`);
    }
    //RÉSZTVEVŐK
    resztvevoEltavolitasa(nev, resztvevo) {
        const rendezveny = this.rendezvenyek.find(rendezveny => rendezveny.nev === nev);
        if (rendezveny) {
            rendezveny.resztvevok = rendezveny.resztvevok.filter(r => r !== resztvevo);
            alert(`"${resztvevo}" résztvevő sikeresen eltávolítva a(z) "${nev}" rendezvényről.`);
        }
        else {
            alert(`Nincs ilyen nevű rendezvény: ${nev}`);
        }
    }
    resztvevokHozzaadasa(nev, resztvevo) {
        const rendezveny = this.rendezvenyek.find(rendezveny => rendezveny.nev === nev);
        if (rendezveny) {
            rendezveny.resztvevok.push(resztvevo);
            alert(`"${resztvevo}" résztvevő sikeresen hozzáadva a(z) "${nev}" rendezvényhez.`);
        }
        else {
            alert(`Nincs ilyen nevű rendezvény: ${nev}`);
        }
    }
}
;
