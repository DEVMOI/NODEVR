<template>
    <div id="GitCommits">
        <h5>Latest Commits</h5>
        <div class="row text-center justify-content-center">
            <div class="px-2" v-for="branch in branches">
                <input type="radio"
                       :id="branch"
                       :value="branch"
                       name="branch"
                       v-model="currentBranch">
                <label class="fnt-monospace" :for="branch">{{ branch.toUpperCase() }}</label>
            </div>
        </div>
        <p class="fnt-monospace">NodeGG/NodeVR@{{ currentBranch }}</p>
        <ul class="d-flex flex-column justify-content-center p-0">
            <li class="no-list-style fnt-11 fnt-monospace"" v-for="record in commits">
                <a :href="record.html_url" target="_blank" class="commit">{{ record.sha.slice(0, 7) }}</a>
                - <span class="message">{{ record.commit.message | truncate }}</span><br>
                by <span class="author"><a :href="record.author.html_url" target="_blank">{{ record.commit.author.name }}</a></span>
                at <span class="date">{{ record.commit.author.date | formatDate }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    var apiURL = 'https://api.github.com/repos/nodegg/nodevr/commits?per_page=5&sha=';

    export default {
        name: "GitCommit",
        data() {
            return {
                branches: ['dev', 'master'],
                currentBranch: 'dev',
                commits: null
            }
        },
        created: function () {
            this.fetchData()
        },
        watch: {
            currentBranch: 'fetchData'
        },

        filters: {
            truncate: function (v) {
                var newline = v.indexOf('\n');
                return newline > 0 ? v.slice(0, newline) : v
            },
            formatDate: function (v) {
                return v.replace(/T|Z/g, ' ')
            }
        },

        methods: {
            fetchData: function () {
                var xhr = new XMLHttpRequest();
                var self = this;
                xhr.open('GET', apiURL + self.currentBranch);
                xhr.onload = function () {
                    self.commits = JSON.parse(xhr.responseText);
                    console.log(self.commits[0].html_url);
                };
                xhr.send();
            }
        }
    }
</script>

<style >
    #GitCommits a {
        text-decoration: none;
        color: #f66;
    }

    #GitCommits li {
        line-height: 1.5em;
        margin-bottom: 20px;
    }

    .author, .date {
        font-weight: bold;
    }
</style>