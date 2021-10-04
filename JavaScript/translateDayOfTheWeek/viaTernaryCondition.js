let day = prompt('Please choose the day you would like learn it\'s german translation...').toLowerCase();

let derTag = (day == 'monday' ? 'Montag'

                : (day == 'tuesday' ? 'Dienstag'

                    : (day == 'wednesday' ? 'Mittwoch'

                        : (day == 'thursday' ? 'Donnerstag'

                            : (day == 'friday' ? 'Freitag'

                                : (day == 'saturday' ? 'Samstag'

                                    : ( day == 'sunday' ? 'Sonntag')
                                )
                            )

                        )

                    )

                )

)

console.log(`German translation of ${day} is ${derTag}. `)
