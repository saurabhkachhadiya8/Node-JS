const express = require('express');
const port = 8080;
const app = express();

app.set('view engine', 'ejs');

const path = require('path');
app.use(express.static(path.join(__dirname,"public")));

app.get('/', (req, res) => {
    return res.render('dashboard');
});
app.get('/chart_widgets',(req,res)=>{
    return res.render('chart_widgets');
});
app.get('/data_widgets',(req,res)=>{
    return res.render('data_widgets');
});
app.get('/chat',(req,res)=>{
    return res.render('chat');
});
app.get('/portfolio',(req,res)=>{
    return res.render('portfolio');
});
app.get('/blog',(req,res)=>{
    return res.render('blog');
});
app.get('/calendar',(req,res)=>{
    return res.render('calendar');
});
app.get('/inbox',(req,res)=>{
    return res.render('inbox');
});
app.get('/compose',(req,res)=>{
    return res.render('compose');
});
app.get('/read',(req,res)=>{
    return res.render('read');
});
app.get('/alert',(req,res)=>{
    return res.render('alert');
});
app.get('/badge',(req,res)=>{
    return res.render('badge');
});
app.get('/breadcrumb',(req,res)=>{
    return res.render('breadcrumb');
});
app.get('/buttons',(req,res)=>{
    return res.render('buttons');
});
app.get('/collapse',(req,res)=>{
    return res.render('collapse');
});
app.get('/dropdown',(req,res)=>{
    return res.render('dropdown');
});
app.get('/checkbox&radios',(req,res)=>{
    return res.render('checkbox&radios');
});
app.get('/list-group',(req,res)=>{
    return res.render('list-group');
});
app.get('/media-object',(req,res)=>{
    return res.render('media-object');
});
app.get('/navbar',(req,res)=>{
    return res.render('navbar');
});
app.get('/pagination',(req,res)=>{
    return res.render('pagination');
});
app.get('/popover',(req,res)=>{
    return res.render('popover');
});
app.get('/progress',(req,res)=>{
    return res.render('progress');
});
app.get('/tooltip',(req,res)=>{
    return res.render('tooltip');
});
app.get('/flags',(req,res)=>{
    return res.render('flags');
});
app.get('/typography',(req,res)=>{
    return res.render('typography');
});
app.get('/sweet-alert',(req,res)=>{
    return res.render('sweet-alert');
});
app.get('/tabs',(req,res)=>{
    return res.render('tabs');
});
app.get('/toastr',(req,res)=>{
    return res.render('toastr');
});
app.get('/avatar',(req,res)=>{
    return res.render('avatar');
});
app.get('/card',(req,res)=>{
    return res.render('card');
});
app.get('/empty-state',(req,res)=>{
    return res.render('empty-state');
});
app.get('/modal',(req,res)=>{
    return res.render('modal');
});
app.get('/multiple-upload',(req,res)=>{
    return res.render('multiple-upload');
});
app.get('/pricing',(req,res)=>{
    return res.render('pricing');
});
app.get('/blank',(req,res)=>{
    return res.render('blank');
});
app.get('/basic-form',(req,res)=>{
    return res.render('basic-form');
});
app.get('/advanced-form',(req,res)=>{
    return res.render('advanced-form');
});
app.get('/editor',(req,res)=>{
    return res.render('editor');
});
app.get('/validation',(req,res)=>{
    return res.render('validation');
});
app.get('/form-wizard',(req,res)=>{
    return res.render('form-wizard');
});
app.get('/basic-table',(req,res)=>{
    return res.render('basic-table');
});
app.get('/advanced-table',(req,res)=>{
    return res.render('advanced-table');
});
app.get('/datatables',(req,res)=>{
    return res.render('datatables');
});
app.get('/export-table',(req,res)=>{
    return res.render('export-table');
});
app.get('/editable-table',(req,res)=>{
    return res.render('editable-table');
});
app.get('/amchart',(req,res)=>{
    return res.render('amchart');
});
app.get('/apexchart',(req,res)=>{
    return res.render('apexchart');
});
app.get('/echart',(req,res)=>{
    return res.render('echart');
});
app.get('/chartjs',(req,res)=>{
    return res.render('chartjs');
});
app.get('/sparkline',(req,res)=>{
    return res.render('sparkline');
});
app.get('/morris',(req,res)=>{
    return res.render('morris');
});
app.get('/font-awesome',(req,res)=>{
    return res.render('font-awesome');
});
app.get('/material-design',(req,res)=>{
    return res.render('material-design');
});
app.get('/ion-icons',(req,res)=>{
    return res.render('ion-icons');
});
app.get('/feather-icons',(req,res)=>{
    return res.render('feather-icons');
});
app.get('/weather-icon',(req,res)=>{
    return res.render('weather-icon');
});
app.get('/light-gallery',(req,res)=>{
    return res.render('light-gallery');
});
app.get('/gallery2',(req,res)=>{
    return res.render('gallery2');
});
app.get('/bootstrap-carousel',(req,res)=>{
    return res.render('bootstrap-carousel');
});
app.get('/owl-carousel',(req,res)=>{
    return res.render('owl-carousel');
});
app.get('/timeline',(req,res)=>{
    return res.render('timeline');
});
app.get('/advanced-route',(req,res)=>{
    return res.render('advanced-route');
});
app.get('/draggable-marker',(req,res)=>{
    return res.render('draggable-marker');
});
app.get('/geocoding',(req,res)=>{
    return res.render('geocoding');
});
app.get('/geolocation',(req,res)=>{
    return res.render('geolocation');
});
app.get('/marker',(req,res)=>{
    return res.render('marker');
});
app.get('/multiple-marker',(req,res)=>{
    return res.render('multiple-marker');
});
app.get('/route',(req,res)=>{
    return res.render('route');
});
app.get('/simple',(req,res)=>{
    return res.render('simple');
});
app.get('/vector-map',(req,res)=>{
    return res.render('vector-map');
});
app.get('/login',(req,res)=>{
    return res.render('login');
});
app.get('/register',(req,res)=>{
    return res.render('register');
});
app.get('/forgot-password',(req,res)=>{
    return res.render('forgot-password');
});
app.get('/reset-password',(req,res)=>{
    return res.render('reset-password');
});
app.get('/subscribe',(req,res)=>{
    return res.render('subscribe');
});
app.get('/403',(req,res)=>{
    return res.render('403');
});
app.get('/404',(req,res)=>{
    return res.render('404');
});
app.get('/500',(req,res)=>{
    return res.render('500');
});
app.get('/503',(req,res)=>{
    return res.render('503');
});
app.get('/create-post',(req,res)=>{
    return res.render('create-post');
});
app.get('/posts',(req,res)=>{
    return res.render('posts');
});
app.get('/profile',(req,res)=>{
    return res.render('profile');
});
app.get('/contact',(req,res)=>{
    return res.render('contact');
});
app.get('/invoice',(req,res)=>{
    return res.render('invoice');
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log('server is running on port :- ' + port);
});