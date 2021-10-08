function storyGenerator() 
{
    var story={
        noun:      prompt('Please type the subject\'s name.'),
        verb:      prompt('Please type what the subject does.'),
        adverb:    prompt('Please type where the subject does this action.'),
        adjective: prompt('Please type how well the subject does this action.')

    };

    return Object.values(story).join(' ')
}