---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Estimating Treatment Effects under Recommender Interference: A Structured Neural Networks Approach."
authors: 
  - Ruohan Zhan
  - Shichao Han
  - Yuchen Hu
  - Admin

date: ""
show_date: false
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 1111-01-02

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication:
publication_short: ""

abstract: "Recommender systems are essential for content-sharing platforms by curating personalized content. To evaluate updates to recommender systems targeting content creators, platforms frequently rely on creator-side randomized experiments. The treatment effect measures the change in outcomes when a new algorithm is implemented compared to the status quo. We show that the standard difference-in-means estimator can lead to biased estimates due to recommender interference that arises when treated and control creators compete for exposure. We propose a "recommender choice model" that describes which item gets exposed from a pool containing both treated and control items. By combining a structural choice model with neural networks, this framework directly models the interference pathway while accounting for rich viewer-content heterogeneity. We construct a debiased estimator of the treatment effect and prove it is n‾√-consistent and asymptotically normal with potentially correlated samples. We validate our estimator's empirical performance with a field experiment on Weixin short-video platform. In addition to the standard creator-side experiment, we conduct a costly double-sided randomization design to obtain a benchmark estimate free from interference bias. We show that the proposed estimator yields results comparable to the benchmark, whereas the standard difference-in-means estimator can exhibit significant bias and even produce reversed signs."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter
links:
- name: "SSRN"
  url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4521178'
url_code:
url_dataset:
url_poster:
url_project:
url_slides:
url_source:
url_video:

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
