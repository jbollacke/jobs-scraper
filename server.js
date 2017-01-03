var x = require('x-ray')();

x('http://www.coppenrath-wiese.de/karriere/stellenangebote.aspx', '#m302 h3', [{
  id: '@id',
  title: '@text',
  description: function (el, cb) {cb(null, el.next().text())}
}]).write('coppenrath-wiese.json')

x('http://www.sanimed.de/unternehmen/karriere/stellenangebote.html', '#sanimed-8-karriere-stellenangebote div a[href*=stellenangebote]', [{
  title: '@title',
  url: '@href',
}]).write('sanimed.json')

x('http://www.oke.de/arbeiten-bei-oke/jobs/hoerstel/', '.jobList td', [{
  id: '.jobId',
  title: 'a@text',
  url: 'a@href',
}]).write('oke.json')

x('http://www.ba-unternehmensgruppe.de/jobs-karriere/offene-stellen/', 'div#content a[href*=pdf]', [{
  id: '.jobId',
  title: '@text',
  url: '@href',
}]).write('ba-unternehmensgruppe.json')

x('http://www.musik-produktiv.de/stellenangebote.html', 'h1 ~ div h2', [{
  title: '@text'
}]).write('musik-produktiv.json')

x('https://krone.hr4you.org/job_finder.php?page=1&from=change_page&umkreis_distanz=25&umkreis_plz=49477', 'table.resultsNoBorder table tr', [{
  title: 'a strong@text',
  url: 'a@href'
}]).write('krone.json')

x('http://crespeldeitersgroup.com/de/karriere/', 'div > h3 > a', [{
  title: '@text',
  url: '@href'
}]).write('crespeldeitersgroup.json')

x('http://hoevermann-gruppe.de/karriere/', '.fusion-panel', [{
  title: 'h4@text',
  description: '.toggle-content@text'
}]).write('hoevermann-gruppe.json')

x('http://www.wiewelhove.de/jobs.php?lang=de', '.maincontent_box > div[id]', [{
  title: '.CollapsiblePanelTab@text',
  description: '.CollapsiblePanelContent@text'
}]).write('wiewelhove.json')

x(
  'https://amazone.concludis.de/prj/lst/a181a603769c1f98ad927e7367c7aa51/GesamtlisteOffenePositionen.htm?b=0&boerse=&stellort=1|5&stellg1=25',
  '.stellen div',
  [{
    id: '@id',
    title: '.stellenlink@text',
    url: function (el,cb) {
      var val = /OpenAngebot\('(.*)'\);/.exec(el.attr('onclick'));
      if (val) {
        cb(null, val[1])
      }
    }
  }]
).write('amazone.json')

x('http://apetito.de/ueber-apetito/jobs-und-karriere/Stellenangebote/Seiten/default.aspx', '.BGMiddle a', [{
  title: '@text',
  url: '@href'
}]).write('apetito.json')

x('http://www.keller.de/de/jobs-karriere/wen-wir-suchen/aktuelle-ausschreibungen.htm', '.textsitemap a', [{
  title: '@text',
  url: '@href'
}]).write('keller.json')

x('http://www.elster-gas.com/en/careers', '.slideBox:has(div span b:contains(Germany)) tr', [{
  title: 'td:first-child@text',
  url: 'a@href'
}]).write('elster-gas.json')

x('http://www.frimo.com/de/karriere/frimo-karriereportal/stellenangebote.html', '.job_el:has(h3:contains(Lotte)) ul li a', [{
  title: '@text | trim',
  url: '@href'
}]).write('frimo.json')

x('http://www.wuh-lengerich.de/de/units/karriere/jobs-bewerbung/aktuelle-stellenangebote/', '.sitemap--jobs li a', [{
  title: '@text',
  url: '@href'
}]).write('wuh-lengerich.json')

x('https://www.lmis.de/karriere/festanstellung/', 'section:has(h3):nth-child(4n-1)', [{
  title: 'h3@text'
}]).write('lmis.json');

x('http://www.bps-software.de/unternehmen/karriere.html', '.ce_accordion.block', [{
  title: 'h4@text',
  description: 'div.accordion@text'
}]).write('bps-software.json')

x('http://www.mbh-hassink.de/mbh-als-arbeitgeber/wir-suchen-zur-zeit', '#main ul:not(.actions) li a', [{
  title: '@text',
  url: '@href'
}]).write('mbh-hassink.json')
