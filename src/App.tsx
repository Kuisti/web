import './App.css';

import Model from './components/three'
import Section from './components/section'

function App() {
  return (
    <div className="App">
      <Model />
      <div id="kontsa" className="sections">
        <div className="sections-inner">
          <Section title="Mikä ihmeen Kuisti?">
            <p><b>Kuisti ry</b> on vuonna 2020 perustettu <b>kuistitekniikan opiskelijoiden</b> kerho. Kerho vierailee opiskelijatapahtumissa ympäri <b>Tamperetta</b> (joskus myös muuallakin) ja pyrkii levittämään sanomaa kuisteista, niihin sisältyvästä teknologiasta, sekä ihan vaan kuistilla olemisesta.</p>
          </Section>
          <Section title="Mutta edelleen, mikä ihmeen Kuisti?">
            <p><b>Kuisti</b> on Kuisti ry:n köntysten rakentama <b>mobiili kuisti</b>. Kuisti rakennettiin <b>peräkärryn</b> päälle, jotta se helposti saataisiin paikanpäälle <b>tapahtumiin</b>, joissa Kuisti ry vierailee. Kuisti mahdollistaa sen, että kuka tahansa voi halutessaan kokea olevansa kuistilla. <b>Joskus kuistilla on ihan hyvä olla, eikä siinä ole mitään vikaa.</b></p>
          </Section>
          <Section title="Mikä tuo otus on?">
            <p>Mikä otus? Ai <b>Köntikkä</b> vai? Köntikkä kuuluu Kuisti:n rakentajiin ja <b>perustajaköntyksiin</b>. Köntikkä toimii myös Kuistin <b>maskotin</b> virassa. Voit tulla Kuistille halutessasi tapaamaan Köntikkää, vaikkakin hän näyttää hieman erilaiselta oikeassa elämässä. Köntikkä on myös jokaisen Kuistilla olevan opiskelijan toteemieläin.</p>
          </Section>
          <Section title="Miten voin liittyä tähän mahtavaan elämäntyyliin?">
            <p><b>Kuistille ja Kuisti ry:n jäseneksi voi tulla kuka tahansa.</b> Tällä hetkellä hyväksymme kannattajajäsenyyksiä <a href="https://kide.app/memberships/5909ce87-c1e0-4cb4-a536-10347ad38c8d">Kide.app:issa</a>. Varsinaiseksi jäseneksi liittyessäsi, <b>kannustamme sinua tulemaan kuistille</b> ja keskustelemaan tämänhetkisten köntysten kanssa. Kuistitekniikkaa harjoitetaan <b>poikkitieteellisesti</b>, joten <b>opiskelijasuunnallasi tai koulullasi ei ole Kuistille liittyessäsi merkitystä</b>. Kuistilla ollessasi, kannattaa myös kysyä eksklusiivisten haalarimerkkien perään!</p>
          </Section>
          <Section title="Mistä Kuistin löytää?">
            <p>Kuistin voi löytää useista <b>ulkoilma opiskelijatapahtumista</b>. Mikäli köntyksemme ovat aikataulutaan siihen kyenneet, saatat nähdä ilmoituksen tulevasta tapahtumasta jossa Kuisti vierailee, <b>köntikän alapuolella</b>. Kuistin köntyksen voit tunnistaa myös hupparista, jonka selässä on yhdistyksen kryptinen logo, sekä rinnassa komeilevasta veikeästä maskotistamme.</p>
          </Section>
        </div>
        <p className="copyright">
          © Kuisti ry, Kuistitekniikan kerho 2022
        </p>
        <p className="kontys-out">
          Shout out to amadeus
        </p>
      </div>
    </div>
  );
}

export default App;
