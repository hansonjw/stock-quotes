const { Thesis } = require('../models');

const thesisData = [
    {
        id: 1,
        title: "What is next for Tesla?",
        thesis_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod in pellentesque massa placerat duis ultricies. Erat imperdiet sed euismod nisi porta. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Porttitor eget dolor morbi non arcu risus quis varius. Scelerisque purus semper eget duis at tellus at urna condimentum. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Vitae et leo duis ut diam quam nulla. Ornare massa eget egestas purus viverra. Vehicula ipsum a arcu cursus vitae congue. Aliquam ultrices sagittis orci a scelerisque. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Tortor aliquam nulla facilisi cras fermentum odio eu. Pharetra vel turpis nunc eget. Id donec ultrices tincidunt arcu non sodales neque. Senectus et netus et malesuada. Neque gravida in fermentum et. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Nam at lectus urna duis convallis. Cursus mattis molestie a iaculis. Fames ac turpis egestas sed tempus urna et pharetra pharetra. Praesent tristique magna sit amet purus gravida quis blandit turpis. Amet purus gravida quis blandit turpis. Aliquet nec ullamcorper sit amet. At urna condimentum mattis pellentesque id nibh. At tellus at urna condimentum mattis pellentesque id. Hendrerit dolor magna eget est. Eu non diam phasellus vestibulum lorem sed risus ultricies.",
        user_id: 1,
        security_id: 'TSLA',
        createdAt: Date.now()
    },
    {
        id: 2,
        title: "An IPO with some potential...",
        thesis_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum nisi quis. Viverra ipsum nunc aliquet bibendum enim facilisis. Diam volutpat commodo sed egestas egestas fringilla. At volutpat diam ut venenatis tellus in metus vulputate. Massa vitae tortor condimentum lacinia quis vel eros. Risus pretium quam vulputate dignissim suspendisse in est ante. Sollicitudin ac orci phasellus egestas tellus. Dapibus ultrices in iaculis nunc sed. Consequat nisl vel pretium lectus quam id leo in. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Aliquet enim tortor at auctor urna nunc id cursus. Varius duis at consectetur lorem. Pretium fusce id velit ut tortor pretium viverra suspendisse.",
        user_id: 5,
        security_id: 'PLTR',
        createdAt: Date.now()
    },
    {
        id: 3,
        title: "Berkshire, still the one",
        thesis_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum nisi quis. Viverra ipsum nunc aliquet bibendum enim facilisis. Diam volutpat commodo sed egestas egestas fringilla. At volutpat diam ut venenatis tellus in metus vulputate. Massa vitae tortor condimentum lacinia quis vel eros. Risus pretium quam vulputate dignissim suspendisse in est ante. Sollicitudin ac orci phasellus egestas tellus. Dapibus ultrices in iaculis nunc sed. Consequat nisl vel pretium lectus quam id leo in. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Aliquet enim tortor at auctor urna nunc id cursus. Varius duis at consectetur lorem. Pretium fusce id velit ut tortor pretium viverra suspendisse.",
        user_id: 2,
        security_id: 'BRKA',
        createdAt: Date.now()
    },
    {
        id: 4,
        title: "Apple the juggernaught!",
        thesis_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum nisi quis. Viverra ipsum nunc aliquet bibendum enim facilisis. Diam volutpat commodo sed egestas egestas fringilla. At volutpat diam ut venenatis tellus in metus vulputate. Massa vitae tortor condimentum lacinia quis vel eros. Risus pretium quam vulputate dignissim suspendisse in est ante. Sollicitudin ac orci phasellus egestas tellus. Dapibus ultrices in iaculis nunc sed. Consequat nisl vel pretium lectus quam id leo in. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Aliquet enim tortor at auctor urna nunc id cursus. Varius duis at consectetur lorem. Pretium fusce id velit ut tortor pretium viverra suspendisse.",
        user_id: 2,
        security_id: 'AAPL',
        createdAt: Date.now()
    },
    {
        id: 5,
        title: "Is this bank stock boring?",
        thesis_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum nisi quis. Viverra ipsum nunc aliquet bibendum enim facilisis. Diam volutpat commodo sed egestas egestas fringilla. At volutpat diam ut venenatis tellus in metus vulputate. Massa vitae tortor condimentum lacinia quis vel eros. Risus pretium quam vulputate dignissim suspendisse in est ante. Sollicitudin ac orci phasellus egestas tellus. Dapibus ultrices in iaculis nunc sed. Consequat nisl vel pretium lectus quam id leo in. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Aliquet enim tortor at auctor urna nunc id cursus. Varius duis at consectetur lorem. Pretium fusce id velit ut tortor pretium viverra suspendisse.",
        user_id: 1,
        security_id: 'JPM',
        createdAt: Date.now()
    },
    {
        id: 6,
        title: "A case to be made for declining...",
        thesis_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum nisi quis. Viverra ipsum nunc aliquet bibendum enim facilisis. Diam volutpat commodo sed egestas egestas fringilla. At volutpat diam ut venenatis tellus in metus vulputate. Massa vitae tortor condimentum lacinia quis vel eros. Risus pretium quam vulputate dignissim suspendisse in est ante. Sollicitudin ac orci phasellus egestas tellus. Dapibus ultrices in iaculis nunc sed. Consequat nisl vel pretium lectus quam id leo in. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Aliquet enim tortor at auctor urna nunc id cursus. Varius duis at consectetur lorem. Pretium fusce id velit ut tortor pretium viverra suspendisse.",
        user_id: 4,
        security_id: 'TSLA',
        createdAt: Date.now()
    },
    {
        id: 7,
        title: "More Palantir...",
        thesis_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum nisi quis. Viverra ipsum nunc aliquet bibendum enim facilisis. Diam volutpat commodo sed egestas egestas fringilla. At volutpat diam ut venenatis tellus in metus vulputate. Massa vitae tortor condimentum lacinia quis vel eros. Risus pretium quam vulputate dignissim suspendisse in est ante. Sollicitudin ac orci phasellus egestas tellus. Dapibus ultrices in iaculis nunc sed. Consequat nisl vel pretium lectus quam id leo in. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Aliquet enim tortor at auctor urna nunc id cursus. Varius duis at consectetur lorem. Pretium fusce id velit ut tortor pretium viverra suspendisse.",
        user_id: 2,
        security_id: 'PLTR',
        createdAt: Date.now()
    },
    {
        id: 8,
        title: "More Berkshire",
        thesis_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum nisi quis. Viverra ipsum nunc aliquet bibendum enim facilisis. Diam volutpat commodo sed egestas egestas fringilla. At volutpat diam ut venenatis tellus in metus vulputate. Massa vitae tortor condimentum lacinia quis vel eros. Risus pretium quam vulputate dignissim suspendisse in est ante. Sollicitudin ac orci phasellus egestas tellus. Dapibus ultrices in iaculis nunc sed. Consequat nisl vel pretium lectus quam id leo in. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Aliquet enim tortor at auctor urna nunc id cursus. Varius duis at consectetur lorem. Pretium fusce id velit ut tortor pretium viverra suspendisse.",
        user_id: 5,
        security_id: 'BRKA',
        createdAt: Date.now()
    },
    {
        id: 9,
        title: "More Apple...",
        thesis_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum nisi quis. Viverra ipsum nunc aliquet bibendum enim facilisis. Diam volutpat commodo sed egestas egestas fringilla. At volutpat diam ut venenatis tellus in metus vulputate. Massa vitae tortor condimentum lacinia quis vel eros. Risus pretium quam vulputate dignissim suspendisse in est ante. Sollicitudin ac orci phasellus egestas tellus. Dapibus ultrices in iaculis nunc sed. Consequat nisl vel pretium lectus quam id leo in. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Aliquet enim tortor at auctor urna nunc id cursus. Varius duis at consectetur lorem. Pretium fusce id velit ut tortor pretium viverra suspendisse.",
        user_id: 4,
        security_id: 'AAPL',
        createdAt: Date.now()
    },
    {
        id: 10,
        title: "More JPMorgan",
        thesis_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque ornare aenean euismod elementum nisi quis. Viverra ipsum nunc aliquet bibendum enim facilisis. Diam volutpat commodo sed egestas egestas fringilla. At volutpat diam ut venenatis tellus in metus vulputate. Massa vitae tortor condimentum lacinia quis vel eros. Risus pretium quam vulputate dignissim suspendisse in est ante. Sollicitudin ac orci phasellus egestas tellus. Dapibus ultrices in iaculis nunc sed. Consequat nisl vel pretium lectus quam id leo in. Bibendum est ultricies integer quis auctor elit sed vulputate mi. Aliquet enim tortor at auctor urna nunc id cursus. Varius duis at consectetur lorem. Pretium fusce id velit ut tortor pretium viverra suspendisse.",
        user_id: 2,
        security_id: 'JPM',
        createdAt: Date.now()
    },
];

const seedThesis = () => Thesis.bulkCreate(thesisData);

module.exports = seedThesis;