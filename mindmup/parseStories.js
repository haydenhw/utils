const stories = require('./' + process.argv[2]);

const collectStories = (stories) => {
    const titles = [];
    const iterateStories = (stories) => {
        const { ideas } = stories;
        for (key in ideas) {
            const idea = ideas[key];
            titles.push(idea.title);
            if (idea.ideas) {
                iterateStories(idea);
            }
        }
    }
    iterateStories(stories);
    return titles;
}

const titles = collectStories(stories);

module.exports = titles;