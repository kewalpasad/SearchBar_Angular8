import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

export interface User {
  name: string;
  email: string;
  company: string;
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  // title = "SearchBarApp";

  myControl = new FormControl();
  options: User[] = [
    {
      name: "Dante",
      email: "bibendum@metusAenean.org",
      company: "Fringilla Porttitor LLP"
    },
    {
      name: "Eaton",
      email: "elit@nonnisi.net",
      company: "Nulla Aliquet Corp."
    },
    {
      name: "Hamilton",
      email: "ipsum.dolor@vehicularisusNulla.co.uk",
      company: "At Arcu Vestibulum Ltd"
    },
    {
      name: "Bruno",
      email: "tincidunt.Donec.vitae@fringillacursuspurus.com",
      company: "Vel Est Limited"
    },
    {
      name: "Dexter",
      email: "ac.orci@elit.com",
      company: "Nullam Enim Sed Associates"
    },
    {
      name: "Xanthus",
      email: "Cum.sociis.natoque@laciniamattisInteger.co.uk",
      company: "Erat Vivamus Nisi Ltd"
    },
    {
      name: "Macon",
      email: "Curabitur.consequat@disparturient.edu",
      company: "Rhoncus Proin Nisl Consulting"
    },
    {
      name: "James",
      email: "Cum.sociis@Maurismolestiepharetra.net",
      company: "Adipiscing Mauris LLC"
    },
    {
      name: "Akeem",
      email: "sollicitudin.commodo@mi.ca",
      company: "Lacus Nulla PC"
    },
    {
      name: "Knox",
      email: "metus.vitae.velit@posuereatvelit.net",
      company: "Et Ltd"
    },
    {
      name: "Raphael",
      email: "lorem.semper.auctor@massa.edu",
      company: "Quis Arcu Vel Ltd"
    },
    {
      name: "Lev",
      email: "Vivamus@ametconsectetuer.org",
      company: "Molestie Pharetra PC"
    },
    {
      name: "Channing",
      email: "Lorem.ipsum@in.net",
      company: "Quisque Nonummy Ipsum Corp."
    },
    {
      name: "Callum",
      email: "facilisis@acturpisegestas.ca",
      company: "Hendrerit Consectetuer Foundation"
    },
    {
      name: "Mohammad",
      email: "fermentum.metus.Aenean@enim.org",
      company: "Integer Urna PC"
    },
    { name: "Francis", email: "mi@enimNunc.net", company: "Facilisis Inc." },
    {
      name: "Salvador",
      email: "ante.iaculis@eget.com",
      company: "Sed Dui Associates"
    },
    { name: "Cain", email: "iaculis@semperdui.net", company: "Purus Company" },
    { name: "Lucius", email: "lacus@tellus.org", company: "Eros Consulting" },
    {
      name: "Guy",
      email: "metus@risusDuisa.net",
      company: "Sed Pede Industries"
    },
    {
      name: "Burke",
      email: "amet.diam.eu@rutrum.co.uk",
      company: "Nulla In Tincidunt Corp."
    },
    {
      name: "Cairo",
      email: "iaculis.enim@Curabitur.com",
      company: "Ullamcorper Velit In Incorporated"
    },
    {
      name: "Kennedy",
      email: "eu.elit.Nulla@condimentumeget.edu",
      company: "Rhoncus Incorporated"
    },
    {
      name: "David",
      email: "consectetuer@malesuadautsem.edu",
      company: "Ullamcorper Velit Consulting"
    },
    {
      name: "Walter",
      email: "mi.lacinia.mattis@nonlobortis.ca",
      company: "Diam Nunc Company"
    },
    {
      name: "Elmo",
      email: "elementum.dui.quis@molestie.co.uk",
      company: "Feugiat Placerat Velit Incorporated"
    },
    {
      name: "Mufutau",
      email: "metus.facilisis.lorem@Maurisnon.net",
      company: "Est Vitae Sodales LLP"
    },
    {
      name: "Prescott",
      email: "mi.pede@rutrum.com",
      company: "Aliquam Tincidunt Nunc Company"
    },
    {
      name: "Rahim",
      email: "interdum.Curabitur.dictum@dolor.com",
      company: "Curabitur Vel Lectus Limited"
    },
    {
      name: "Denton",
      email: "augue.id@fringillaDonec.org",
      company: "Lacus PC"
    },
    {
      name: "Tucker",
      email: "urna.Ut.tincidunt@ullamcorpervelit.com",
      company: "Ut Cursus Luctus Inc."
    },
    {
      name: "Uriel",
      email: "velit.Pellentesque@InloremDonec.co.uk",
      company: "Aliquet Molestie Tellus Inc."
    },
    {
      name: "Brian",
      email: "pede.nonummy.ut@dictum.org",
      company: "Elit Institute"
    },
    {
      name: "Stuart",
      email: "amet@dolorDonecfringilla.com",
      company: "Libero Lacus Limited"
    },
    {
      name: "Reece",
      email: "vestibulum@nondapibus.net",
      company: "Ipsum Dolor Company"
    },
    {
      name: "Garth",
      email: "sagittis@sagittislobortis.co.uk",
      company: "Mattis Velit Justo LLP"
    },
    {
      name: "Driscoll",
      email: "interdum.Sed.auctor@eu.edu",
      company: "A Corp."
    },
    {
      name: "Herrod",
      email: "enim@in.ca",
      company: "Mauris Suspendisse Corp."
    },
    {
      name: "Herman",
      email: "et.magnis.dis@enim.net",
      company: "Convallis Ligula Foundation"
    },
    {
      name: "Kasper",
      email: "Phasellus@amet.ca",
      company: "Luctus Ut Pellentesque Institute"
    },
    {
      name: "Dean",
      email: "orci.quis@malesuadavel.ca",
      company: "Eu Institute"
    },
    {
      name: "Cyrus",
      email: "non.quam@vulputate.edu",
      company: "Ante Corporation"
    },
    {
      name: "Herrod",
      email: "feugiat.tellus@dignissim.com",
      company: "Massa Non Ante LLC"
    },
    {
      name: "Allen",
      email: "libero@senectus.net",
      company: "Nunc Mauris Sapien Associates"
    },
    {
      name: "Hayden",
      email: "ligula@loremluctus.com",
      company: "Nunc Laoreet Lectus Associates"
    },
    { name: "Lee", email: "at@vitaeodio.ca", company: "Mattis Integer Inc." },
    {
      name: "Trevor",
      email: "mattis.ornare.lectus@Phasellusin.net",
      company: "Mattis Velit Justo Incorporated"
    },
    {
      name: "Giacomo",
      email: "ipsum@nequeNullam.ca",
      company: "Erat Vivamus Nisi Limited"
    },
    {
      name: "Cade",
      email: "Sed.diam.lorem@gravida.edu",
      company: "Diam Dictum Company"
    },
    {
      name: "Grant",
      email: "diam.at@orciDonecnibh.edu",
      company: "Urna Limited"
    },
    {
      name: "Uriel",
      email: "eros.Proin@lacusvestibulum.net",
      company: "Sodales Purus In Foundation"
    },
    {
      name: "Seth",
      email: "lacus@ligulaAliquamerat.edu",
      company: "Sed Pede PC"
    },
    {
      name: "Yasir",
      email: "fringilla.purus@Nullamvelitdui.org",
      company: "Lacus Varius Et Foundation"
    },
    {
      name: "Emery",
      email: "cursus@Inscelerisquescelerisque.org",
      company: "Lectus Nullam Suscipit Corporation"
    },
    {
      name: "Edward",
      email: "nec.urna.suscipit@magnaPhasellusdolor.net",
      company: "Amet Consectetuer Consulting"
    },
    {
      name: "Bevis",
      email: "adipiscing.Mauris.molestie@volutpatNullafacilisis.com",
      company: "Tristique Neque Venenatis Industries"
    },
    {
      name: "August",
      email: "Sed@ullamcorpervelitin.co.uk",
      company: "Eget Metus In LLC"
    },
    {
      name: "Peter",
      email: "convallis.est.vitae@magna.com",
      company: "Nulla Ltd"
    },
    {
      name: "Bradley",
      email: "aliquam.arcu@convallisante.ca",
      company: "Malesuada Ut Sem Corp."
    },
    {
      name: "Blake",
      email: "luctus.vulputate.nisi@Aliquamtinciduntnunc.com",
      company: "Sit Amet Corporation"
    },
    {
      name: "Wayne",
      email: "ornare.placerat.orci@Cras.org",
      company: "Lobortis Quis Limited"
    },
    {
      name: "Jamal",
      email: "aliquet.magna@neque.com",
      company: "Consequat Auctor Ltd"
    },
    {
      name: "Colt",
      email: "fringilla.ornare@mifelisadipiscing.edu",
      company: "Magnis Dis Parturient Foundation"
    },
    {
      name: "Nigel",
      email: "ante.lectus.convallis@commodotincidunt.edu",
      company: "Semper Consulting"
    },
    {
      name: "Price",
      email: "sed.hendrerit.a@utpellentesqueeget.net",
      company: "Felis Ullamcorper Foundation"
    },
    {
      name: "Silas",
      email: "malesuada.Integer@ornarelectusjusto.co.uk",
      company: "Morbi Metus Vivamus Incorporated"
    },
    {
      name: "Oren",
      email: "amet.consectetuer.adipiscing@adipiscingelit.net",
      company: "Nec Ante Maecenas Institute"
    },
    {
      name: "Quinn",
      email: "est.mollis.non@porttitorscelerisque.com",
      company: "Eu Metus Ltd"
    },
    {
      name: "Tucker",
      email: "elit.erat.vitae@velitdui.edu",
      company: "Duis Sit Amet Institute"
    },
    {
      name: "Fuller",
      email: "bibendum@purusNullamscelerisque.co.uk",
      company: "Tortor Dictum Inc."
    },
    {
      name: "Judah",
      email: "aliquet.metus@sapienNunc.net",
      company: "Vulputate Limited"
    },
    {
      name: "Hector",
      email: "Nunc@fringilla.com",
      company: "Tristique Associates"
    },
    {
      name: "Dieter",
      email: "ac@quamPellentesque.com",
      company: "Tristique Corporation"
    },
    { name: "Tyler", email: "erat.semper@arcu.co.uk", company: "Magna Inc." },
    {
      name: "Victor",
      email: "litora@pedeSuspendissedui.ca",
      company: "Mattis Velit Limited"
    },
    {
      name: "Chancellor",
      email: "fringilla.porttitor@scelerisquemollis.ca",
      company: "Magnis Incorporated"
    },
    {
      name: "Leonard",
      email: "id.blandit@atliberoMorbi.co.uk",
      company: "Sollicitudin Adipiscing Ligula Corporation"
    },
    {
      name: "Lawrence",
      email: "Ut@mollis.net",
      company: "Ultrices Duis Volutpat Foundation"
    },
    {
      name: "Dominic",
      email: "aliquet.libero@penatibuset.net",
      company: "Ac Mattis Semper Industries"
    },
    {
      name: "Gil",
      email: "Nunc.quis@quis.org",
      company: "Suspendisse Foundation"
    },
    { name: "Reece", email: "vel.arcu.eu@etipsum.com", company: "Magnis PC" },
    {
      name: "Kieran",
      email: "ornare.lectus.ante@Vivamusnibhdolor.co.uk",
      company: "Etiam PC"
    },
    {
      name: "Darius",
      email: "convallis.est.vitae@cursus.org",
      company: "Ante Lectus LLC"
    },
    {
      name: "Drake",
      email: "ac.urna@idblandit.edu",
      company: "Auctor Associates"
    },
    {
      name: "Igor",
      email: "non@atrisusNunc.co.uk",
      company: "Cras Eget Company"
    },
    {
      name: "Dylan",
      email: "mauris.sapien@Cum.ca",
      company: "Nisl Incorporated"
    },
    {
      name: "Ryder",
      email: "ante@ametconsectetueradipiscing.edu",
      company: "Ornare Libero At LLP"
    },
    { name: "Sylvester", email: "vel@non.co.uk", company: "Duis Corporation" },
    {
      name: "Lane",
      email: "Donec@famesac.com",
      company: "Aliquam Rutrum Associates"
    },
    {
      name: "Michael",
      email: "nec@neque.com",
      company: "Hendrerit Donec Porttitor LLP"
    },
    {
      name: "Ciaran",
      email: "eu.enim.Etiam@sed.net",
      company: "In Faucibus Morbi Associates"
    },
    {
      name: "Colby",
      email: "quam.Pellentesque.habitant@perinceptos.edu",
      company: "Pede Et Risus Industries"
    },
    {
      name: "Maxwell",
      email: "neque.vitae.semper@velfaucibus.org",
      company: "Duis At Institute"
    },
    {
      name: "Hilel",
      email: "eleifend.non@cubiliaCurae.ca",
      company: "Sed Dui Institute"
    },
    {
      name: "Wylie",
      email: "odio.auctor.vitae@nequeetnunc.org",
      company: "Arcu Imperdiet Ullamcorper Institute"
    },
    {
      name: "Fuller",
      email: "velit.egestas.lacinia@Donec.net",
      company: "Malesuada Industries"
    },
    {
      name: "Clinton",
      email: "turpis@aliquetlibero.edu",
      company: "Vitae Aliquet Inc."
    },
    {
      name: "Colorado",
      email: "sapien.Cras@euenim.ca",
      company: "Lacinia Company"
    },
    {
      name: "Ciaran",
      email: "Quisque.nonummy@feugiatnec.org",
      company: "Cursus Foundation"
    },
    {
      name: "Sebastian",
      email: "commodo@nuncInat.net",
      company: "Eu Tellus Phasellus Incorporated"
    }
  ];
  filteredOptions: Observable<User[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(value => (typeof value === "string" ? value : value.name)),
      map(name => (name ? this._filter(name) : this.options.slice()))
    );
  }

  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(
      option => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }
}
