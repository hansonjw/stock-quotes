const { Comment } = require('../models');

const commentData = [
    {
        id: 1,
        user_id: 5,
        thesis_id: 2,
        comment_opinion: "neutral",
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis nunc sed id semper risus in hendrerit. Et sollicitudin ac orci phasellus egestas tellus."
    },
    {
        id: 2,
        user_id: 4,
        thesis_id: 3,
        comment_opinion: "oppose",
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis nunc sed id semper risus in hendrerit. Et sollicitudin ac orci phasellus egestas tellus."
    },
    {
        id: 3,
        user_id: 3,
        thesis_id: 2,
        comment_opinion: "support",
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum iaculis eu non."
    },
    {
        id: 4,
        user_id: 2,
        thesis_id: 1,
        comment_opinion: "oppose",
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum iaculis eu non."
    },
    {
        id: 5,
        user_id: 1,
        thesis_id: 5,
        comment_opinion: "support",
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum iaculis eu non."
    },
    {
        id: 6,
        user_id: 4,
        thesis_id: 4,
        comment_opinion: "neutral",
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum iaculis eu non."
    },
    {
        id: 7,
        user_id: 3,
        thesis_id: 2,
        comment_opinion: "support",
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum iaculis eu non."
    },
    {
        id: 8,
        user_id: 3,
        thesis_id: 1,
        comment_opinion: "oppose",
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum iaculis eu non."
    },
    {
        id: 9,
        user_id: 5,
        thesis_id: 2,
        comment_opinion: "support",
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum iaculis eu non."
    },
    {
        id: 10,
        user_id: 4,
        thesis_id: 1,
        comment_opinion: "oppose",
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna fermentum iaculis eu non."
    },
    {
        id: 11,
        user_id: 1,
        thesis_id: 1,
        comment_opinion: "support",
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Rhoncus dolor purus non enim praesent elementum."
    },
    {
        id: 12,
        user_id: 3,
        thesis_id: 4,
        comment_opinion: "neutral",
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Rhoncus dolor purus non enim praesent elementum."
    },
    {
        id: 13,
        user_id: 4,
        thesis_id: 2,
        comment_opinion: "support",
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Rhoncus dolor purus non enim praesent elementum."
    },
    {
        id: 14,
        user_id: 5,
        thesis_id: 3,
        comment_opinion: "oppose",
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Rhoncus dolor purus non enim praesent elementum."
    },
    {
        id: 15,
        user_id: 2,
        thesis_id: 6,
        comment_opinion: "oppose",
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Rhoncus dolor purus non enim praesent elementum."
    },
    {
        id: 16,
        user_id: 3,
        thesis_id: 1,
        comment_opinion: "support",
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Rhoncus dolor purus non enim praesent elementum."
    },
    {
        id: 17,
        user_id: 4,
        thesis_id: 7,
        comment_opinion: "support",
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Rhoncus dolor purus non enim praesent elementum."
    },
    {
        id: 18,
        user_id: 1,
        thesis_id: 4,
        comment_opinion: "support",
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Rhoncus dolor purus non enim praesent elementum."
    },
    {
        id: 19,
        user_id: 1,
        thesis_id: 3,
        comment_opinion: "oppose",
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Rhoncus dolor purus non enim praesent elementum."
    },
    {
        id: 20,
        user_id: 2,
        thesis_id: 2,
        comment_opinion: "support",
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Rhoncus dolor purus non enim praesent elementum."
    },
    {
        id: 21,
        user_id: 3,
        thesis_id: 1,
        comment_opinion: "oppose",
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Rhoncus dolor purus non enim praesent elementum."
    },
    {
        id: 22,
        user_id: 5,
        thesis_id: 2,
        comment_opinion: "support",
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Rhoncus dolor purus non enim praesent elementum."
    },
    {
        id: 23,
        user_id: 4,
        thesis_id: 2,
        comment_opinion: "support",
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Rhoncus dolor purus non enim praesent elementum."
    },
    {
        id: 24,
        user_id: 1,
        thesis_id: 4,
        comment_opinion: "oppose",
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Rhoncus dolor purus non enim praesent elementum."
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;