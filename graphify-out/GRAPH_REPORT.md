# Graph Report - instaloader  (2026-09-01)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 893 nodes · 1743 edges · 62 communities (37 shown, 21 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 71 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c73f6c8c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8
- Community 9
- Community 10
- Community 11
- Community 12
- Community 13
- Community 14
- Community 15
- Community 16
- Community 17
- Community 18
- Community 19
- Community 20
- Community 21
- Community 22
- Community 23
- Community 24
- Community 25
- Community 26
- Community 27
- Community 28
- Community 29
- Community 30
- Community 31
- Community 32
- Community 33
- Community 34
- Community 35
- Community 36
- Community 37
- Community 38
- Community 39
- Community 40
- Community 41
- Community 42
- Community 43
- Community 44
- Community 45
- Community 46
- Community 47
- Community 48
- Community 49
- Community 50
- Community 51
- Community 52
- Community 53
- Community 54
- Community 55
- Community 56
- Community 57

## God Nodes (most connected - your core abstractions)
1. `Post` - 94 edges
2. `Profile` - 88 edges
3. `Instaloader` - 71 edges
4. `InstaloaderContext` - 69 edges
5. `StoryItem` - 42 edges
6. `NodeIterator` - 38 edges
7. `LatestStamps` - 34 edges
8. `Hashtag` - 33 edges
9. `Story` - 23 edges
10. `_main()` - 23 edges

## Surprising Connections (you probably didn't know these)
- `import_session()` --uses--> `Instaloader`  [INFERRED]
  docs/codesnippets/615_import_firefox_session.py → instaloader/instaloader.py
- `get_cookies_from_instagram()` --calls--> `InvalidArgumentException`  [INFERRED]
  instaloader/__main__.py → instaloader/exceptions.py
- `_main()` --calls--> `InvalidArgumentException`  [INFERRED]
  instaloader/__main__.py → instaloader/exceptions.py
- `NodeIterator` --uses--> `InvalidArgumentException`  [INFERRED]
  instaloader/nodeiterator.py → instaloader/exceptions.py
- `resumable_iteration()` --uses--> `InvalidArgumentException`  [INFERRED]
  instaloader/nodeiterator.py → instaloader/exceptions.py

## Import Cycles
- 3-file cycle: `instaloader/__init__.py -> instaloader/instaloader.py -> instaloader/structures.py -> instaloader/__init__.py`

## Communities (62 total, 21 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.05
Nodes (45): Exception, AbortDownloadException, BadCredentialsException, ConnectionException, InstaloaderException, InvalidArgumentException, LoginException, PostChangedException (+37 more)

### Community 1 - "Community 1"
Cohesion: 0.11
Nodes (29): App(), ImpactPaths(), MediaFrame(), MediaFrameProps, ProgramSelector(), ProjectFeature(), SectionLabel(), SiteFooter() (+21 more)

### Community 2 - "Community 2"
Cohesion: 0.05
Nodes (6): skip, Unit Tests for Instaloader, Caption parsing, which requires no network access., TestCaptionMentions, TestInstaloaderAnonymously, TestInstaloaderLoggedIn

### Community 3 - "Community 3"
Cohesion: 0.07
Nodes (10): Profile, .. versionadded:: 4.4, List of all lowercased profiles that are mentioned in the Profile's biography,…, .. deprecated:: 4.0.6 Always returns `True` since :issue:`153`. Before broken,…, .. deprecated:: 4.0.6 Some stories are private. This property determines if the…, Return URL of profile picture. If logged in, the HD version is returned,…, Return URL of lower-quality profile picture. .. versionadded:: 4.9.3, .. deprecated:: 4.0.3 Use :attr:`profile_pic_url`. (+2 more)

### Community 4 - "Community 4"
Cohesion: 0.06
Nodes (32): framer-motion, jsdom, react, react-dom, dependencies, framer-motion, react, react-dom (+24 more)

### Community 5 - "Community 5"
Cohesion: 0.10
Nodes (19): _ArbitraryItemFormatter, _PostPathFormatter, datetime, Path, Override to substitute {ATTRIBUTE} by attributes of our _item., Override :meth:`string.Formatter.format_field` to have our default format_spec…, Replaces '/' with similar looking Division Slash and some other illegal…, Downloads and saves picture with given url under given directory with given… (+11 more)

### Community 6 - "Community 6"
Cohesion: 0.14
Nodes (19): Download pictures (or videos) along with their captions and other metadata from…, FrozenNodeIterator, NamedTuple, Freeze the iterator for later resuming., High-level context manager to handle a resumable iteration that can be…, resumable_iteration(), get_json_structure(), load_structure() (+11 more)

### Community 7 - "Community 7"
Cohesion: 0.09
Nodes (24): _get_config_dir(), get_default_session_filename(), get_default_stamps_filename(), get_legacy_session_filename(), Returns default session filename for given username., Returns legacy (until v4.4.3) default session filename for given username., Returns default filename for latest stamps database. .. versionadded:: 4.8, Internally stores :class:`requests.Session` object loaded from file. If… (+16 more)

### Community 8 - "Community 8"
Cohesion: 0.15
Nodes (9): LatestStamps, datetime, Returns filename of profile's last downloaded profile pic., Sets filename of profile's last downloaded profile pic., Returns stored ID of profile., Stores ID of profile., Returns timestamp of last download of a profile's posts., Sets timestamp of last download of a profile's posts. (+1 more)

### Community 9 - "Community 9"
Cohesion: 0.22
Nodes (25): a(), b(), c(), d(), e(), F(), g(), h() (+17 more)

### Community 10 - "Community 10"
Cohesion: 0.09
Nodes (9): Hashtag, An Hashtag. Analogous to :class:`Profile`, get an instance with:: L =…, Hashtag name lowercased, without preceding '#, Yields the top posts of the hashtag., The count of all media associated with this hashtag. The number of posts with a…, Yields the recent posts associated with this hashtag. .. deprecated:: 4.9 Use…, Yields all posts, i.e. all most recent posts and the top posts, in almost-…, Get the recent posts of the hashtag in a resumable fashion. :rtype:… (+1 more)

### Community 11 - "Community 11"
Cohesion: 0.09
Nodes (10): Structure containing information about a user story item i.e. image or video.…, The StoryItem owner's lowercase name., The ID of the StoryItem owner., Synonym to :attr:`~StoryItem.owner_username`, URL of the picture / video thumbnail of the StoryItem, Type of post, GraphStoryImage or GraphStoryVideo, List of all lowercased profiles that are mentioned in the StoryItem's caption,…, True if the StoryItem is a video. (+2 more)

### Community 12 - "Community 12"
Cohesion: 0.09
Nodes (22): DOM, DOM.Iterable, ES2022, src, compilerOptions, allowJs, allowSyntheticDefaultImports, esModuleInterop (+14 more)

### Community 13 - "Community 13"
Cohesion: 0.10
Nodes (12): Get Posts of the user's feed. :return: Iterator over Posts of the user's feed.…, Download pictures from the user's feed. Example to download up to the 20 pics…, Get Posts which are listed by Instagram for a given Location. :return: Iterator…, Download pictures of one location. To download the last 30 pictures with…, Get Posts which are worthy of exploring suggested by Instagram. :return:…, Saves internally stored :class:`requests.Session` object to :class:`dict`.…, Saves internally stored :class:`requests.Session` object. :param filename:…, Decorator to raise an exception if herewith-decorated function is called… (+4 more)

### Community 14 - "Community 14"
Cohesion: 0.11
Nodes (11): Download the Posts returned by given Post Iterator. .. versionadded:: 4.4 ..…, Download user's saved pictures. :param max_count: Maximum count of pictures to…, Download all posts where a profile is tagged. .. versionadded:: 4.1 ..…, Download reels videos of a profile. .. versionadded:: 4.14.0, Download IGTV videos of a profile. .. versionadded:: 4.3 .. versionchanged::…, High-level method to download set of profiles. :param profiles: Set of profiles…, Download one profile .. deprecated:: 4.1 Use…, Returns a filename within the target path. .. versionadded:: 4.5 (+3 more)

### Community 15 - "Community 15"
Cohesion: 0.12
Nodes (10): Instaloader, Logs in and internally stores session, asking user for password interactively.…, Returns whether any error has been reported and stored to be repeated at…, Instaloader Class. :param quiet: :option:`--quiet` :param user_agent:…, Yield an anonymous, otherwise equally-configured copy of an Instaloader…, Close associated session objects and repeat error log., Internally stores :class:`requests.Session` object from :class:`dict`. ..…, Returns the Instagram username to which given :class:`requests.Session` object… (+2 more)

### Community 16 - "Community 16"
Cohesion: 0.13
Nodes (10): InstaloaderContext, True, if this Instaloader instance is logged in., Returns whether any error has been reported and stored to be repeated at…, Print error log and close session, Not meant to be used directly, use :meth:`Instaloader.save_session`., .. versionadded:: 4.11, Not meant to be used directly, use :meth:`Instaloader.load_session`., Class providing methods for (error) logging and low-level communication with… (+2 more)

### Community 17 - "Community 17"
Cohesion: 0.13
Nodes (7): IPhoneSupportDisabledException, LoginRequiredException, Any, Return own profile if logged-in. :param context: :attr:`Instaloader.context` ..…, Normalize PolarisProfilePageContentQuery response to match legacy format., Get Posts that are marked as saved by the user. :rtype: NodeIterator[Post], Iterate over all likes of the post. A :class:`Profile` instance of each likee…

### Community 18 - "Community 18"
Cohesion: 0.15
Nodes (8): NodeIterator, Any, T, The ``count`` as returned by Instagram. This is not always the total count this…, Number of items that have already been returned., If this iterator has produced any items, returns the first item produced. It is…, Iterate the nodes within edges in a GraphQL pagination. Instances of this class…, Iterate over all comments of the post. Each comment is represented by a…

### Community 19 - "Community 19"
Cohesion: 0.12
Nodes (7): Retrieve all posts where a profile is tagged. :rtype: NodeIterator[Post] ..…, Retrieve all reels from a profile. :rtype: NodeIterator[Post] .. versionadded::…, Retrieve all IGTV posts. :rtype: NodeIterator[Post] .. versionadded:: 4.3, Retrieve list of hashtags followed by given profile. To use this, one needs to…, Retrieve list of followers of given profile. To use this, one needs to be…, Retrieve list of followees (followings) of given profile. To use this, one…, Retrieve list of suggested / similar accounts for this profile. To use this,…

### Community 20 - "Community 20"
Cohesion: 0.11
Nodes (8): Post, Structure containing information about an Instagram post. Created by methods…, Media shortcode. URL of the post is instagram.com/p/<shortcode>/., The ID of the Post's owner., Synonym to :attr:`~Post.owner_username`, List of all lowercased hashtags (without preceding #) that occur in the Post's…, List of all lowercased profiles that are mentioned in the Post's caption,…, True if the Post is a video.

### Community 21 - "Community 21"
Cohesion: 0.11
Nodes (16): byShortcode, copied, fieldNotes, generatedPath, here, mediaRoot, posts, profilePath (+8 more)

### Community 22 - "Community 22"
Cohesion: 0.12
Nodes (7): datetime, Timestamp when the StoryItem was created (local time zone). .. versionchanged::…, Timestamp when the StoryItem was created (UTC)., Synonym to :attr:`~StoryItem.date_utc`, Timestamp when the StoryItem will get unavailable (local time zone)., Timestamp when the last item of the story was created (local time zone)., Synonym to :attr:`~Post.date_utc`

### Community 23 - "Community 23"
Cohesion: 0.12
Nodes (7): Structure representing a user story with its associated items. Provides methods…, Timestamp of the most recent StoryItem that has been watched or None (local…, Timestamp of the most recent StoryItem that has been watched or None (UTC)., Count of items associated with the :class:`Story` instance., The story owner's lowercase username., The story owner's ID., Story

### Community 24 - "Community 24"
Cohesion: 0.12
Nodes (7): Lookups given fields in _node, and if not found in _full_metadata. Raises…, Type of post, GraphImage, GraphVideo or GraphSidecar, Return a list containing the ``is_video`` property for each media in the post.…, List of all lowercased users that are tagged in the Post., View count of the video, or None. .. versionadded:: 4.2.6, Play count of the video, or None. .. versionadded:: 4.14.3, Whether Post is a sponsored post, equivalent to non-empty…

### Community 25 - "Community 25"
Cohesion: 0.12
Nodes (15): ES2023, vite.config.ts, compilerOptions, allowImportingTsExtensions, lib, module, moduleDetection, moduleResolution (+7 more)

### Community 26 - "Community 26"
Cohesion: 0.18
Nodes (7): RateController, Class providing request tracking and rate controlling to stay within rate…, Wait given number of seconds., Return how many requests of the given type can be done within a sliding window…, Calculate time needed to wait before query can be executed., This method is called before a query to Instagram. It calls…, This method is called to handle a 429 Too Many Requests response. It calls…

### Community 27 - "Community 27"
Cohesion: 0.14
Nodes (7): Highlight, Structure representing a user's highlight with its associated story items.…, A unique ID identifying this set of highlights., The title of these highlights., URL of the highlights' cover., URL of the cropped version of the cover., Count of items associated with the :class:`Highlight` instance.

### Community 28 - "Community 28"
Cohesion: 0.13
Nodes (6): PostComment, Number of likes on comment., Iterator which yields all :class:`PostCommentAnswer` for the comment., Iterate over all likes of a comment. A :class:`Profile` instance of each like…, ID number of comment., :class:`~datetime.datetime` when comment was created (UTC).

### Community 29 - "Community 29"
Cohesion: 0.13
Nodes (8): An invocation of this class triggers a search on Instagram for the provided…, Provides the :class:`Profile` instances from the search result., Provides all profile names from the search result that start with the search…, Provides instances of :class:`PostLocation` from the search result., Provides the hashtags from the search result as strings., Provides the hashtags from the search result. .. versionadded:: 4.4, The string that was searched for on Instagram to produce this…, TopSearchResults

### Community 30 - "Community 30"
Cohesion: 0.20
Nodes (5): format_string_contains_key(), Any, Load ID of profile from profile directory. .. versionadded:: 4.8, Store ID of profile on profile directory. .. versionadded:: 4.0.6, Consult locally stored ID of profile with given name, check whether ID matches…

### Community 31 - "Community 31"
Cohesion: 0.18
Nodes (6): JsonExportable, Get Posts associated with a #hashtag. .. deprecated:: 4.4 Use…, Download pictures of one hashtag. To download the last 30 pictures with hashtag…, Saves metadata JSON file of a structure., Downloads and saves the profile picture of a Hashtag. .. versionadded:: 4.4, Create a Hashtag instance from a given hashtag name, without preceding '#'.…

### Community 32 - "Community 32"
Cohesion: 0.33
Nodes (4): Any, T, Iterator for the new 'sections'-style responses. .. versionadded:: 4.9, SectionIterator

### Community 33 - "Community 33"
Cohesion: 0.22
Nodes (4): Create a profile from a given iphone_struct. .. versionadded:: 4.9, Retrieve all posts from a profile. :rtype: NodeIterator[Post], Create a post from a given iphone_struct. .. versionadded:: 4.9, Owner :class:`Profile` of the comment.

### Community 35 - "Community 35"
Cohesion: 0.29
Nodes (3): This ID only equals amongst :class:`Story` instances which have the same owner…, Retrieve all items from a story., Retrieve all associated highlight items.

### Community 36 - "Community 36"
Cohesion: 0.40
Nodes (3): BadResponseException, Fetch play_count for a reel via the clips connection endpoint as a fallback., Normalize a Polaris media item to a legacy-compatible node, preserving the…

### Community 37 - "Community 37"
Cohesion: 0.33
Nodes (3): Timestamp when the post was created (local time zone). .. versionchanged:: 4.9…, Timestamp when the post was created (UTC)., Timestamp when the post was created

## Knowledge Gaps
- **72 isolated node(s):** `MediaFrameProps`, `SourceRef`, `links`, `allowJs`, `allowSyntheticDefaultImports` (+67 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 373 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **21 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Post` connect `Community 20` to `Community 2`, `Community 3`, `Community 5`, `Community 6`, `Community 7`, `Community 10`, `Community 11`, `Community 13`, `Community 14`, `Community 15`, `Community 16`, `Community 17`, `Community 18`, `Community 19`, `Community 22`, `Community 24`, `Community 31`, `Community 33`, `Community 36`, `Community 37`, `Community 38`, `Community 39`, `Community 41`, `Community 42`, `Community 46`, `Community 47`, `Community 48`, `Community 49`, `Community 50`, `Community 51`, `Community 52`, `Community 53`, `Community 54`, `Community 55`, `Community 56`, `Community 57`?**
  _High betweenness centrality (0.160) - this node is a cross-community bridge._
- **Why does `InstaloaderContext` connect `Community 16` to `Community 0`, `Community 3`, `Community 6`, `Community 7`, `Community 10`, `Community 11`, `Community 15`, `Community 17`, `Community 18`, `Community 20`, `Community 23`, `Community 26`, `Community 27`, `Community 29`, `Community 30`, `Community 31`, `Community 32`, `Community 33`, `Community 38`?**
  _High betweenness centrality (0.139) - this node is a cross-community bridge._
- **Why does `Instaloader` connect `Community 15` to `Community 3`, `Community 5`, `Community 6`, `Community 7`, `Community 8`, `Community 10`, `Community 11`, `Community 13`, `Community 14`, `Community 16`, `Community 18`, `Community 20`, `Community 23`, `Community 26`, `Community 27`, `Community 30`, `Community 31`, `Community 32`, `Community 34`, `Community 40`?**
  _High betweenness centrality (0.129) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `Post` (e.g. with `_ArbitraryItemFormatter` and `Instaloader`) actually correct?**
  _`Post` has 4 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `Profile` (e.g. with `Instaloader` and `InstaloaderContext`) actually correct?**
  _`Profile` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Are the 15 inferred relationships involving `Instaloader` (e.g. with `import_session()` and `InstaloaderContext`) actually correct?**
  _`Instaloader` has 15 INFERRED edges - model-reasoned connections that need verification._
- **Are the 13 inferred relationships involving `InstaloaderContext` (e.g. with `Instaloader` and `NodeIterator`) actually correct?**
  _`InstaloaderContext` has 13 INFERRED edges - model-reasoned connections that need verification._