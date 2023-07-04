var map = L.map('map', {
center: [ -6.707784, -79.900040],
zoom: 14,
minZoom: 8,
maxZoom: 20,
maxBounds: [[-7.3471,-80.8478], [-5.431,-79.0351]]
});

L.control.scale({
    imperial: false
    }).addTo(map);

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);


var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
googleSat.addTo(map);

var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
googleHybrid.addTo(map);

var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
googleTerrain.addTo(map);

var inicial = L.tileLayer.wms("http://localhost:8080/geoserver/weblambayeque/wms?", {
  layers: "weblambayeque:col_inicial_lam", //gisweb:col_inicial_lam
  format: 'image/png',
  transparent: true,
  version: '1.1.1',
  attribution: "SENCICO"
});
inicial.addTo(map);

var secundaria = L.tileLayer.wms("http://localhost:8080/geoserver/weblambayeque/wms?", {
layers: "weblambayeque:col_secundaria_lam", //gisweb:col_secundaria_lam
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
secundaria.addTo(map);

var bus = L.tileLayer.wms("http://localhost:8080/geoserver/weblambayeque/wms?", {
layers: "weblambayeque:estacion_bus_lam", //gisweb:estacion_bus_lam
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
bus.addTo(map);

var farmacia = L.tileLayer.wms("http://localhost:8080/geoserver/weblambayeque/wms?", {
layers: "weblambayeque:farmacias_lam", //gisweb:farmacias_lam
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
farmacia.addTo(map);

var ferreteria = L.tileLayer.wms("http://localhost:8080/geoserver/weblambayeque/wms?", {
layers: "weblambayeque:ferreteria_lam", //gisweb:ferreteria_lam
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
ferreteria.addTo(map);

var grifo = L.tileLayer.wms("http://localhost:8080/geoserver/weblambayeque/wms?", {
layers: "weblambayeque:grifos_lam", //gisweb:grifos_lam
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
grifo.addTo(map);

var hospital = L.tileLayer.wms("http://localhost:8080/geoserver/weblambayeque/wms?", {
layers: "weblambayeque:hospital_lam", //gisweb:hospital_lam
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
hospital.addTo(map);

var hostal = L.tileLayer.wms("http://localhost:8080/geoserver/weblambayeque/wms?", {
layers: "weblambayeque:hostal_lam", //gisweb:hostal_lam
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
hostal.addTo(map);

var hotel = L.tileLayer.wms("http://localhost:8080/geoserver/weblambayeque/wms?", {
layers: "weblambayeque:hotel_lambayeque", //gisweb:hotel_lambayeque
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
hotel.addTo(map);

var iglesia = L.tileLayer.wms("http://localhost:8080/geoserver/weblambayeque/wms?", {
layers: "weblambayeque:iglesias_lambayeque", //gisweb:iglesias_lambayeque
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
iglesia.addTo(map);

var insti = L.tileLayer.wms("http://localhost:8080/geoserver/weblambayeque/wms?", {
layers: "weblambayeque:institutos_lam", //gisweb:institutos_lam
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
insti.addTo(map); 

var mercado = L.tileLayer.wms("http://localhost:8080/geoserver/weblambayeque/wms?", {
layers: "weblambayeque:mercados_lam", //gisweb:mercados_lam
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
mercado.addTo(map);

var comedor = L.tileLayer.wms("http://localhost:8080/geoserver/weblambayeque/wms?", {
layers: "weblambayeque:restaurant_lam", //gisweb:restaurant_lam
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
comedor.addTo(map);

var club = L.tileLayer.wms("http://localhost:8080/geoserver/weblambayeque/wms?", {
layers: "weblambayeque:nightclub_lam", //gisweb:nightclub_lam
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
club.addTo(map);

var distritos = L.tileLayer.wms("http://localhost:8080/geoserver/weblambayeque/wms?", {
layers: "weblambayeque:dis_lambayeque", //gisweb:dis_lambayeque
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
distritos.addTo(map);

var provincia = L.tileLayer.wms("http://localhost:8080/geoserver/weblambayeque/wms?", {
layers: "weblambayeque:pro_lambayeque", //gisweb:pro_lambayeque
format: 'image/png',
transparent: true,
version: '1.1.1',
attribution: "SENCICO"
});
provincia.addTo(map);

var baseMaps = {
    "OSM": basemapOSM,
    "Hibrido":googleHybrid,
    "Terrain":googleTerrain,
    "Satelite":googleSat
    };
    var overlayMaps = {
    "Distritos de Lambayeque": distritos,  
    "Provincias de Lambayeque": provincia, 
    "colegio inicial": inicial,
    "colegio secundaria": secundaria,
    "Terminales de buses":bus,
    "Farmacias":farmacia,
    "Ferreterias":ferreteria,
    "Grifos":grifo,
    "Hospitales":hospital,
    "Hostales":hostal,
    "Hoteles":hotel,
    "Iglesias":iglesia,
    "Institutos":insti,
    "Mercados":mercado,
    "Restaurantes":comedor,
    "Clubes Nocturnos":club,
    };
    L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
    }).addTo(map);