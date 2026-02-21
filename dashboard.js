// ===== TEAM DATA =====
const currentUser = { id: 'user-1', name: 'Alex Reed', avatar: 'avatars/demmo-avatar-x1.webp', initials: 'AR' };
const teamMembers = [
    currentUser,
    { id: 'user-2', name: 'Sarah M.', avatar: 'avatars/demmo-avatar-x2.webp', initials: 'SM' },
    { id: 'user-3', name: 'Mike T.', avatar: 'avatars/demmo-avatar-x3.webp', initials: 'MT' },
];

// ===== DEMO DATA =====
const tracks = [
    { id: 1, status: 'new', track: 'Velvet Static', artist: 'Luna Ray', genre: 'Electronic', genreClass: 'genre-electronic', imprint: 'Colorize', date: 'Today', avatar: 'avatars/demmo-avatar-x1.webp', artwork: 'artwork/demmo-placeholder-artwork-1.jpeg', audio: 'audio/run-marc-v-remix.mp3', priority: true, submissions: 3, accepted: 1, firstSub: 'Jan 2026', lastSub: 'Feb 2026', followers: 84500, isOriginal: true, isRemix: false, isInstrumental: false, aiUsage: 'none', isExclusive: true, samplesCleared: true, socials: { spotify: 'https://open.spotify.com/artist/lunaray', instagram: 'https://instagram.com/lunaraymusic', youtube: 'https://youtube.com/@lunaray', soundcloud: 'https://soundcloud.com/lunaray' }, assignedTo: null, onboardingSent: false, notes: 'Strong vocal mix, could fit the spring playlist. Follow up with artist about stems.', email: 'luna@lunaraymusic.com', duration: '4:32', sampleRate: '44kHz', bitDepth: '24-bit', submittedTo: 'Colorize \u2014 Spring 2026 Playlist', releaseNotes: '' },
    { id: 2, status: 'new', track: 'Slow Burn (Demo)', artist: 'NVDES', genre: 'Indie', genreClass: 'genre-indie', imprint: 'Enhanced Chill', date: 'Today', avatar: 'avatars/demmo-avatar-x2.webp', artwork: 'artwork/demmo-placeholder-artwork-2.jpeg', audio: 'audio/momentum-extended-mix.mp3', priority: false, submissions: 1, accepted: 0, firstSub: 'Feb 2026', lastSub: 'Feb 2026', followers: 259000, isOriginal: true, isRemix: false, isInstrumental: false, aiUsage: 'not_predominantly', isExclusive: false, samplesCleared: true, socials: { spotify: 'https://open.spotify.com/artist/nvdes', instagram: 'https://instagram.com/nvdes', youtube: 'https://youtube.com/@nvdes', soundcloud: 'https://soundcloud.com/nvdes' }, assignedTo: null, onboardingSent: false, notes: '', email: 'nvdes@nvdesmusic.com', duration: '3:48', sampleRate: '48kHz', bitDepth: '32-bit', submittedTo: null, releaseNotes: '' },
    { id: 3, status: 'new', track: 'Glass Hours', artist: 'Pale Waves', genre: 'Pop', genreClass: 'genre-pop', imprint: 'Enhanced Recordings', date: 'Yesterday', avatar: 'avatars/demmo-avatar-x3.webp', artwork: 'artwork/demmo-placeholder-artwork-3.jpeg', audio: 'audio/chords-of-serenity.mp3', priority: false, submissions: 5, accepted: 2, firstSub: 'Nov 2025', lastSub: 'Feb 2026', followers: 1240000, isOriginal: true, isRemix: false, isInstrumental: false, aiUsage: 'none', isExclusive: true, samplesCleared: true, socials: { spotify: 'https://open.spotify.com/artist/palewaves', instagram: 'https://instagram.com/palewaves', youtube: 'https://youtube.com/@palewaves', soundcloud: 'https://soundcloud.com/palewaves' }, assignedTo: { id: 'user-2', name: 'Sarah M.', avatar: 'avatars/demmo-avatar-x2.webp', initials: 'SM' }, onboardingSent: false, notes: '', email: 'mgmt@palewaves.co.uk', duration: '5:12', sampleRate: '44kHz', bitDepth: '24-bit', submittedTo: 'Enhanced Recordings \u2014 New Singles', releaseNotes: '' },
    { id: 4, status: 'new', track: 'Neon Undertow', artist: 'Soft Launch', genre: 'Electronic', genreClass: 'genre-electronic', imprint: 'Enhanced Progressive', date: 'Yesterday', avatar: 'avatars/demmo-avatar-x4.webp', artwork: 'artwork/demmo-placeholder-artwork-4.jpeg', audio: 'audio/daydreaming.mp3', priority: false, submissions: 2, accepted: 0, firstSub: 'Dec 2025', lastSub: 'Feb 2026', followers: 31200, isOriginal: false, isRemix: true, isInstrumental: true, aiUsage: 'none', isExclusive: false, samplesCleared: true, socials: { spotify: 'https://open.spotify.com/artist/softlaunch', instagram: 'https://instagram.com/softlaunchband', youtube: 'https://youtube.com/@softlaunch', soundcloud: 'https://soundcloud.com/softlaunch' }, assignedTo: null, onboardingSent: false, notes: '', email: 'hello@softlaunchmusic.com', duration: '6:15', sampleRate: '44kHz', bitDepth: '16-bit', submittedTo: 'Enhanced Progressive \u2014 Spring EP', releaseNotes: '' },
    { id: 5, status: 'new', track: 'Hollow Season', artist: 'MUNA', genre: 'Pop', genreClass: 'genre-pop', imprint: 'Colorize', date: '2 days ago', avatar: 'avatars/demmo-avatar-x1.webp', artwork: 'artwork/demmo-placeholder-artwork-5.jpeg', audio: 'audio/machina.mp3', priority: false, submissions: 4, accepted: 1, firstSub: 'Oct 2025', lastSub: 'Feb 2026', followers: 612000, isOriginal: true, isRemix: false, isInstrumental: false, aiUsage: 'predominantly', isExclusive: true, samplesCleared: false, socials: { spotify: 'https://open.spotify.com/artist/muna', instagram: 'https://instagram.com/munatheband', youtube: 'https://youtube.com/@munatheband', soundcloud: 'https://soundcloud.com/munatheband' }, assignedTo: { id: 'user-3', name: 'Mike T.', avatar: 'avatars/demmo-avatar-x3.webp', initials: 'MT' }, onboardingSent: false, notes: 'Needs mastering work. Check AI usage claim \u2014 sounds human to me.', email: 'mgmt@muna.band', duration: '3:55', sampleRate: '44kHz', bitDepth: '24-bit', submittedTo: 'Colorize \u2014 Spring 2026 Playlist', releaseNotes: '' },
    { id: 6, status: 'new', track: 'Drift (Unmastered)', artist: 'PREP', genre: 'R&B', genreClass: 'genre-rnb', imprint: 'Shapes of Solitude', date: '3 days ago', avatar: 'avatars/demmo-avatar-x2.webp', artwork: 'artwork/demmo-placeholder-artwork-6.jpeg', audio: 'audio/abyss-original-mix.mp3', priority: false, submissions: 1, accepted: 0, firstSub: 'Feb 2026', lastSub: 'Feb 2026', followers: 178000, isOriginal: true, isRemix: false, isInstrumental: false, aiUsage: 'none', isExclusive: false, samplesCleared: true, socials: { spotify: 'https://open.spotify.com/artist/prep', instagram: 'https://instagram.com/weareprepband', youtube: 'https://youtube.com/@prepband', soundcloud: 'https://soundcloud.com/weareprepband' }, assignedTo: null, onboardingSent: false, notes: '', email: 'info@weareprepband.com', duration: '7:37', sampleRate: '44kHz', bitDepth: '24-bit', submittedTo: null, releaseNotes: '' },
    { id: 7, status: 'new', track: 'Pale Meridian', artist: 'Still Woozy', genre: 'Indie', genreClass: 'genre-indie', imprint: 'Enhanced Chill', date: '4 days ago', avatar: 'avatars/demmo-avatar-x3.webp', artwork: 'artwork/demmo-placeholder-artwork-7.jpeg', audio: 'audio/ambient-odyssey.mp3', priority: false, submissions: 7, accepted: 3, firstSub: 'Aug 2025', lastSub: 'Feb 2026', followers: 430000, isOriginal: false, isRemix: true, isInstrumental: false, aiUsage: 'not_predominantly', isExclusive: true, samplesCleared: true, socials: { spotify: 'https://open.spotify.com/artist/stillwoozy', instagram: 'https://instagram.com/stillwoozy', youtube: 'https://youtube.com/@stillwoozy', soundcloud: 'https://soundcloud.com/stillwoozy' }, assignedTo: null, onboardingSent: false, notes: '', email: 'sven@stillwoozy.com', duration: '5:48', sampleRate: '48kHz', bitDepth: '32-bit', submittedTo: 'Enhanced Chill \u2014 Ambient Series Vol. 3', releaseNotes: '' },
];

// ===== CONVERSATIONS DATA =====
const conversations = [
    {
        id: 'conv-1', trackId: 1, participants: ['label_team', 'artist'], unreadCount: 2,
        lastActivity: new Date('2026-02-21T14:32:00'),
        messages: [
            { id: 'msg-1-1', sender: 'label_team', senderName: 'Alex Reed', senderInitials: 'AR', text: 'Hi Luna! We really enjoyed Velvet Static. The vocal mix is fantastic — could you tell us more about the production process?', timestamp: new Date('2026-02-20T10:15:00'), read: true },
            { id: 'msg-1-2', sender: 'artist', senderName: 'Luna Ray', senderInitials: 'LR', text: 'Thanks so much! I recorded the vocals in my home studio and used a combination of analog synths and Ableton for the production. Happy to send stems if needed!', timestamp: new Date('2026-02-20T11:42:00'), read: true },
            { id: 'msg-1-3', sender: 'label_team', senderName: 'Sarah M.', senderInitials: 'SM', text: 'That would be great. We\'re thinking this could fit the spring playlist on Colorize. Can you send the stems by end of week?', timestamp: new Date('2026-02-21T09:05:00'), read: true },
            { id: 'msg-1-4', sender: 'artist', senderName: 'Luna Ray', senderInitials: 'LR', text: 'Absolutely, I\'ll have them over by Thursday. Should I include the dry vocals separately?', timestamp: new Date('2026-02-21T14:20:00'), read: false },
            { id: 'msg-1-5', sender: 'artist', senderName: 'Luna Ray', senderInitials: 'LR', text: 'Also, I have a B-side that might work well as a package. Want me to send that too?', timestamp: new Date('2026-02-21T14:32:00'), read: false },
        ]
    },
    {
        id: 'conv-2', trackId: 3, participants: ['label_team', 'artist'], unreadCount: 0,
        lastActivity: new Date('2026-02-20T16:10:00'),
        messages: [
            { id: 'msg-2-1', sender: 'label_team', senderName: 'Sarah M.', senderInitials: 'SM', text: 'Glass Hours is sounding really strong. We\'ve been looking for a pop crossover for Enhanced Recordings. Are you open to some mastering notes?', timestamp: new Date('2026-02-19T15:30:00'), read: true },
            { id: 'msg-2-2', sender: 'artist', senderName: 'Pale Waves', senderInitials: 'PW', text: 'Definitely open to feedback! We want to make sure the final version is radio-ready.', timestamp: new Date('2026-02-20T16:10:00'), read: true },
        ]
    },
    {
        id: 'conv-3', trackId: 5, participants: ['label_team', 'artist'], unreadCount: 1,
        lastActivity: new Date('2026-02-21T08:45:00'),
        messages: [
            { id: 'msg-3-1', sender: 'label_team', senderName: 'Mike T.', senderInitials: 'MT', text: 'Quick question about Hollow Season — can you clarify the AI usage on this track? Our policy requires full disclosure.', timestamp: new Date('2026-02-20T11:00:00'), read: true },
            { id: 'msg-3-2', sender: 'artist', senderName: 'MUNA', senderInitials: 'MU', text: 'Of course! We used AI for some of the initial chord progression ideas, but all performances, vocals, and final arrangement are 100% human. Happy to provide more detail if needed.', timestamp: new Date('2026-02-21T08:45:00'), read: false },
        ]
    },
    {
        id: 'conv-4', trackId: 7, participants: ['label_team', 'artist'], unreadCount: 0,
        lastActivity: new Date('2026-02-18T20:15:00'),
        messages: [
            { id: 'msg-4-1', sender: 'label_team', senderName: 'Alex Reed', senderInitials: 'AR', text: 'Pale Meridian is beautiful. We love the atmospheric layers — this is exactly what Enhanced Chill is looking for.', timestamp: new Date('2026-02-18T20:15:00'), read: true },
        ]
    },
    {
        id: 'conv-5', trackId: 6, participants: ['label_team', 'artist'], unreadCount: 0,
        lastActivity: new Date('2026-02-19T09:30:00'),
        messages: []
    },
];

let focusedIndex = 0;
let playingId = null;
let currentFilter = 'new';
let currentImprint = 'all';
let currentView = 'dashboard'; // 'dashboard' | 'demos' | 'artists' | 'conversations'
let currentScope = 'all'; // 'all' | 'unassigned' | 'mine'
let currentSort = 'artist';
let sortDirection = 'asc';
let bulkSelected = new Set();
let lastSelectedIndex = null;
let toastTimer = null;
let hasSeenListTips = localStorage.getItem('demmo_list_tips_seen') === 'true';
let artistsSort = 'artist';
let artistsSortDirection = 'asc';
let selectedArtist = null; // artist name when viewing detail, null for list
let activeConversationId = null;
let conversationFilter = 'all';
let selectedRelease = null;           // release id when viewing detail, null for list
let releaseDetailTab = 'onboarding';  // 'onboarding' | 'artwork'
let expandedTrackId = null;           // track ID of currently expanded row, or null
let submissionsCollapsed = false;     // sidebar submissions parent collapsed state

// ===== RELEASES DATA =====
const releases = [
    {
        id: 'rel-1', trackId: 1, releaseName: 'Velvet Static', artistName: 'Luna Ray',
        artwork: 'artwork/demmo-placeholder-artwork-1.jpeg', avatar: 'avatars/demmo-avatar-x1.webp',
        imprint: 'Colorize', imprintSlug: 'colorize', date: '2026-02-20',
        status: 'requested', stepsComplete: 0, stepsTotal: 1, source: 'pipeline'
    },
    {
        id: 'rel-2', trackId: 3, releaseName: 'Glass Hours', artistName: 'Pale Waves',
        artwork: 'artwork/demmo-placeholder-artwork-3.jpeg', avatar: 'avatars/demmo-avatar-x3.webp',
        imprint: 'Enhanced Recordings', imprintSlug: 'enhanced-recordings', date: '2026-02-18',
        status: 'in_progress', stepsComplete: 3, stepsTotal: 4, source: 'pipeline'
    },
    {
        id: 'rel-3', trackId: null, releaseName: 'Midnight Frequencies EP', artistName: 'Kasper Koman',
        artwork: 'artwork/demmo-placeholder-artwork-4.jpeg', avatar: 'avatars/demmo-avatar-x4.webp',
        imprint: 'Enhanced Progressive', imprintSlug: 'enhanced-progressive', date: '2026-02-15',
        status: 'complete', stepsComplete: 1, stepsTotal: 1, source: 'external'
    },
    {
        id: 'rel-4', trackId: null, releaseName: 'Solace', artistName: 'Leaving Laurel',
        artwork: 'artwork/demmo-placeholder-artwork-5.jpeg', avatar: 'avatars/demmo-avatar-x1.webp',
        imprint: 'Enhanced Chill', imprintSlug: 'enhanced-chill', date: '2026-02-12',
        status: 'draft', stepsComplete: 0, stepsTotal: 0, source: 'external'
    },
    {
        id: 'rel-5', trackId: 5, releaseName: 'Hollow Season', artistName: 'MUNA',
        artwork: 'artwork/demmo-placeholder-artwork-6.jpeg', avatar: 'avatars/demmo-avatar-x2.webp',
        imprint: 'Colorize', imprintSlug: 'colorize', date: '2026-02-10',
        status: 'requested', stepsComplete: 1, stepsTotal: 3, source: 'pipeline'
    },
    {
        id: 'rel-6', trackId: null, releaseName: 'Drift Away', artistName: 'Marsh',
        artwork: 'artwork/demmo-placeholder-artwork-2.jpeg', avatar: 'avatars/demmo-avatar-x3.webp',
        imprint: 'Enhanced Progressive', imprintSlug: 'enhanced-progressive', date: '2026-01-28',
        status: 'complete', stepsComplete: 4, stepsTotal: 4, source: 'external'
    },
    {
        id: 'rel-7', trackId: null, releaseName: 'Echoes of Tomorrow', artistName: 'Ben Bohmer',
        artwork: 'artwork/demmo-placeholder-artwork-7.jpeg', avatar: 'avatars/demmo-avatar-x4.webp',
        imprint: 'Enhanced Chill', imprintSlug: 'enhanced-chill', date: '2025-12-15',
        status: 'archived', stepsComplete: 4, stepsTotal: 4, source: 'external'
    },
];
let releasesStatusFilter = 'active';
let releasesSort = 'date';
let releasesSortDirection = 'desc';

const trackList = document.getElementById('trackList');
const emptyState = document.getElementById('emptyState');
const toast = document.getElementById('toast');
const confirmOverlay = document.getElementById('confirmOverlay');
const artistPopup = document.getElementById('artistPopup');

// ===== WAVEFORM (Canvas + Web Audio API) =====
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const waveformDataCache = {}; // trackId -> Float32Array of peaks

// Exact gradient from reference CSS:
// rgba(255,178,54,0.4) 0%, rgba(255,154,158,0.5) 25%,
// rgba(253,121,168,0.6) 50%, rgba(168,85,247,0.7) 75%,
// rgba(147,51,234,0.6) 100%  + mix-blend-mode: overlay
function createWaveGradient(ctx, h, opacity) {
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    const a = opacity;
    grad.addColorStop(0,    `rgba(255, 178, 54, ${a})`);    // warm orange
    grad.addColorStop(0.25, `rgba(255, 154, 158, ${a})`);   // salmon-pink
    grad.addColorStop(0.5,  `rgba(253, 121, 168, ${a})`);   // hot pink
    grad.addColorStop(0.75, `rgba(168, 85, 247, ${a})`);    // purple
    grad.addColorStop(1,    `rgba(147, 51, 234, ${a})`);    // deep purple
    return grad;
}

// Generate fallback peaks that look like real audio waveforms
let _wfSeed = 1;
function generateFallbackPeaks(numBars, trackId) {
    _wfSeed = (trackId || 1) * 9301 + 49297;
    function rand() { _wfSeed = (_wfSeed * 9301 + 49297) % 233280; return _wfSeed / 233280; }

    const peaks = new Float32Array(numBars);

    // Create several "energy regions" like a real song
    // (intro quiet, verse medium, chorus loud, bridge quiet, chorus loud, outro fade)
    const numRegions = 5 + Math.floor(rand() * 4); // 5-8 regions
    const regions = [];
    for (let r = 0; r < numRegions; r++) {
        regions.push({
            energy: 0.25 + rand() * 0.75, // base energy level for this region
            variance: 0.1 + rand() * 0.3   // how much variation within region
        });
    }

    for (let i = 0; i < numBars; i++) {
        const pos = i / numBars;
        // Which region are we in (smooth interpolation between regions)
        const regionFloat = pos * (numRegions - 1);
        const regionIdx = Math.min(Math.floor(regionFloat), numRegions - 2);
        const regionBlend = regionFloat - regionIdx;
        const smooth = regionBlend * regionBlend * (3 - 2 * regionBlend); // smoothstep
        const energy = regions[regionIdx].energy * (1 - smooth) + regions[regionIdx + 1].energy * smooth;
        const variance = regions[regionIdx].variance * (1 - smooth) + regions[regionIdx + 1].variance * smooth;

        // Add multiple octaves of noise for realistic texture
        const noise1 = rand() * 2 - 1; // fast variation
        const noise2 = (rand() + rand()) / 2 * 2 - 1; // smoother medium variation

        const val = energy + noise1 * variance * 0.5 + noise2 * variance * 0.5;

        // Intro fade-in & outro fade-out
        const fadeIn = Math.min(1, pos * 8);    // first 12.5%
        const fadeOut = Math.min(1, (1 - pos) * 6); // last ~17%
        const fade = fadeIn * fadeOut;

        peaks[i] = Math.max(0.06, Math.min(1, val * fade));
    }

    // Smooth the peaks slightly so neighboring bars aren't wildly different
    const smoothed = new Float32Array(numBars);
    for (let i = 0; i < numBars; i++) {
        const prev = i > 0 ? peaks[i - 1] : peaks[i];
        const next = i < numBars - 1 ? peaks[i + 1] : peaks[i];
        smoothed[i] = peaks[i] * 0.6 + prev * 0.2 + next * 0.2;
    }
    return smoothed;
}

async function decodeAudioPeaks(audioUrl, numBars) {
    const resp = await fetch(audioUrl);
    if (!resp.ok) throw new Error(`Fetch failed: ${resp.status}`);
    const arrayBuf = await resp.arrayBuffer();
    const audioBuf = await audioCtx.decodeAudioData(arrayBuf);
    const rawData = audioBuf.getChannelData(0); // mono or left channel
    const blockSize = Math.floor(rawData.length / numBars);
    const peaks = new Float32Array(numBars);
    for (let i = 0; i < numBars; i++) {
        let sum = 0;
        const start = i * blockSize;
        for (let j = 0; j < blockSize; j++) {
            sum += Math.abs(rawData[start + j]);
        }
        peaks[i] = sum / blockSize;
    }
    // Normalize to 0..1
    const max = Math.max(...peaks) || 1;
    for (let i = 0; i < numBars; i++) peaks[i] = peaks[i] / max;
    return peaks;
}

function drawWaveform(canvas, peaks, playedPct) {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    if (w === 0 || h === 0) return;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);

    const numBars = peaks.length;
    const gap = 1;
    const barWidth = Math.max(1, (w - gap * (numBars - 1)) / numBars);
    const playedX = (playedPct / 100) * w;
    const centerY = h / 2;
    const radius = Math.min(barWidth / 2, 1);

    // Pre-create only the two main gradients (fast)
    const playedGrad = createWaveGradient(ctx, h, 1.0);
    const unplayedGrad = createWaveGradient(ctx, h, 0.3);

    // Helper: draw a single rounded bar
    function drawBar(x, y, bw, bh, r) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + bw - r, y);
        ctx.quadraticCurveTo(x + bw, y, x + bw, y + r);
        ctx.lineTo(x + bw, y + bh - r);
        ctx.quadraticCurveTo(x + bw, y + bh, x + bw - r, y + bh);
        ctx.lineTo(x + r, y + bh);
        ctx.quadraticCurveTo(x, y + bh, x, y + bh - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.fill();
    }

    // Pass 1: draw all bars as unplayed (dim)
    ctx.fillStyle = unplayedGrad;
    for (let i = 0; i < numBars; i++) {
        const x = i * (barWidth + gap);
        const halfH = Math.max(0.5, peaks[i] * centerY * 0.93);
        drawBar(x, centerY - halfH, barWidth, halfH * 2, radius);
    }

    // Pass 2: overdraw played bars at full brightness
    if (playedX > 0) {
        ctx.fillStyle = playedGrad;
        for (let i = 0; i < numBars; i++) {
            const x = i * (barWidth + gap);
            const barEnd = x + barWidth;
            if (x >= playedX) break; // past playhead, done

            const halfH = Math.max(0.5, peaks[i] * centerY * 0.93);
            const y = centerY - halfH;
            const barH = halfH * 2;

            if (barEnd <= playedX) {
                // Fully played — draw at full opacity
                drawBar(x, y, barWidth, barH, radius);
            } else {
                // Transitioning bar — playhead is partway through
                // Draw with partial opacity so it fades smoothly
                const t = (playedX - x) / barWidth;
                ctx.globalAlpha = t;
                drawBar(x, y, barWidth, barH, radius);
                ctx.globalAlpha = 1;
            }
        }
    }
}

// Setup canvas elements in containers
function ensureCanvas(containerId) {
    const container = document.getElementById(containerId);
    let canvas = container.querySelector('canvas');
    if (!canvas) {
        canvas = document.createElement('canvas');
        container.innerHTML = '';
        container.appendChild(canvas);
    }
    return canvas;
}

// Current waveform state (hero only — bottom bar uses simple progress line)
let currentHeroPeaks = null;      // target peaks (what we're animating toward)
let displayHeroPeaks = null;      // what's currently drawn (animates toward target)
let currentPlayedPct = 0;
let waveAnimRAF = null;

// Calculate bar count — ~2px bar + 1px gap = 3px per bar
function getBarCount(containerId) {
    const el = document.getElementById(containerId);
    if (!el) return 200;
    const w = el.getBoundingClientRect().width || 600;
    return Math.max(100, Math.floor(w / 3));
}

async function loadWaveformForTrack(trackId) {
    const t = tracks.find(tr => tr.id === trackId);
    if (!t) return;

    const heroBars = getBarCount('npHeroWaveform');

    // Set target peaks and start animation from zero
    currentHeroPeaks = generateFallbackPeaks(heroBars, trackId);
    displayHeroPeaks = new Float32Array(heroBars); // start from 0
    startWaveAnimation();

    // Then try to decode real audio data and upgrade
    try {
        if (audioCtx.state === 'suspended') await audioCtx.resume();
        const cacheKey = t.audio;
        if (!waveformDataCache[cacheKey]) {
            waveformDataCache[cacheKey] = await decodeAudioPeaks(t.audio, 2000);
        }
        const fullPeaks = waveformDataCache[cacheKey];
        currentHeroPeaks = downsamplePeaks(fullPeaks, heroBars);
        // Animation already running — it will lerp toward new target
    } catch (e) {
        console.warn('Waveform decode failed, using fallback:', e.message);
    }
}

// Animate bars rising from 0 to target — eased lerp
function startWaveAnimation() {
    if (waveAnimRAF) cancelAnimationFrame(waveAnimRAF);
    let settled = false;

    function animTick() {
        if (!currentHeroPeaks || !displayHeroPeaks) return;

        // If bar count changed (e.g. resize), reallocate
        if (displayHeroPeaks.length !== currentHeroPeaks.length) {
            displayHeroPeaks = new Float32Array(currentHeroPeaks.length);
        }

        settled = true;
        const speed = 0.08; // lerp factor — lower = slower/smoother
        for (let i = 0; i < currentHeroPeaks.length; i++) {
            const target = currentHeroPeaks[i];
            const current = displayHeroPeaks[i];
            const diff = target - current;
            if (Math.abs(diff) > 0.001) {
                displayHeroPeaks[i] = current + diff * speed;
                settled = false;
            } else {
                displayHeroPeaks[i] = target;
            }
        }

        redrawWaveforms();

        if (!settled) {
            waveAnimRAF = requestAnimationFrame(animTick);
        } else {
            waveAnimRAF = null;
        }
    }
    waveAnimRAF = requestAnimationFrame(animTick);
}

function downsamplePeaks(source, target) {
    if (source.length === target) return source;
    const result = new Float32Array(target);
    const ratio = source.length / target;
    for (let i = 0; i < target; i++) {
        const start = Math.floor(i * ratio);
        const end = Math.floor((i + 1) * ratio);
        let max = 0;
        for (let j = start; j < end && j < source.length; j++) {
            if (source[j] > max) max = source[j];
        }
        result[i] = max;
    }
    return result;
}

function redrawWaveforms() {
    const peaks = displayHeroPeaks || currentHeroPeaks;
    if (peaks) {
        const canvas = ensureCanvas('npHeroWaveform');
        // Only show progress fill when hero is displaying the playing track
        const pct = (heroTrackId === playingId) ? currentPlayedPct : 0;
        drawWaveform(canvas, peaks, pct);
    }
}

// Update bottom progress line
function updateProgressBar(pct) {
    const fill = document.getElementById('progressFill');
    if (fill) fill.style.width = pct + '%';
}

function updateWaveformProgress(pct) {
    currentPlayedPct = pct;
    updateProgressBar(pct);
    redrawWaveforms();
}

// Legacy compat stubs
function renderWaveform(id) { loadWaveformForTrack(id); }
function updateHeroWaveformProgress(pct) { /* handled by redrawWaveforms */ }
function renderHeroWaveform(id) { /* handled by loadWaveformForTrack */ }

// Init
ensureCanvas('npHeroWaveform');

// Redraw on resize
window.addEventListener('resize', () => { redrawWaveforms(); });

// ===== AUDIO ENGINE =====
let audioEl = new Audio();
audioEl.volume = 0.7;
let progressRAF = null;

function formatTime(sec) {
    if (isNaN(sec) || !isFinite(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
}

function startProgressLoop() {
    cancelAnimationFrame(progressRAF);
    function tick() {
        if (playingId !== null && !audioEl.paused) {
            const pct = audioEl.duration ? (audioEl.currentTime / audioEl.duration) * 100 : 0;
            updateWaveformProgress(pct);
            // Bottom bar times
            const timeLeft = document.querySelector('.np-time-current');
            const timeRight = document.querySelector('.np-time-total');
            if (timeLeft) timeLeft.textContent = formatTime(audioEl.currentTime);
            if (timeRight) timeRight.textContent = formatTime(audioEl.duration);
            // Hero waveform times (only when hero shows the playing track)
            if (heroTrackId === playingId) {
                const heroStart = document.getElementById('npHeroTimeStart');
                const heroEnd = document.getElementById('npHeroTimeEnd');
                if (heroStart) heroStart.textContent = formatTime(audioEl.currentTime);
                if (heroEnd) heroEnd.textContent = formatTime(audioEl.duration);
            }
        }
        progressRAF = requestAnimationFrame(tick);
    }
    tick();
}

audioEl.addEventListener('ended', () => {
    // Auto-advance to next track within the current filtered view
    const visible = getVisibleTracks();
    const idx = visible.findIndex(t => t.id === playingId);
    if (idx >= 0 && idx < visible.length - 1) {
        const nextTrack = visible[idx + 1];
        setFocus(idx + 1);
        togglePlay(nextTrack.id);
    } else {
        playingId = null;
        renderTracks();
        updateNPIcons();
        updateNPActions();
        syncHeroToFocus();
    }
});

// ===== FOLLOWERS FORMATTER =====
function formatFollowers(n) {
    if (n >= 1000000) return (n / 1000000).toFixed(n % 1000000 === 0 ? 0 : 1).replace(/\.0$/, '') + 'M';
    if (n >= 1000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1).replace(/\.0$/, '') + 'K';
    return n.toString();
}

// ===== POPULARITY COLOR =====
// Low → amber, mid → yellow-green, high → green
function popularityColor(n, max) {
    const t = Math.pow(n / max, 0.5); // sqrt for nicer distribution
    // stops: 0 = amber, 0.5 = yellow-green, 1 = emerald
    const stops = [
        [194, 120,  56],  // amber-ish    (0%)
        [168, 174,  56],  // yellow-green  (50%)
        [ 74, 182, 112],  // emerald       (100%)
    ];
    const seg = t * (stops.length - 1);
    const i = Math.min(Math.floor(seg), stops.length - 2);
    const f = seg - i;
    const r = Math.round(stops[i][0] + (stops[i+1][0] - stops[i][0]) * f);
    const g = Math.round(stops[i][1] + (stops[i+1][1] - stops[i][1]) * f);
    const b = Math.round(stops[i][2] + (stops[i+1][2] - stops[i][2]) * f);
    return `rgb(${r},${g},${b})`;
}

// ===== VISIBLE TRACKS HELPER =====
function getVisibleTracks() {
    let visible = tracks.filter(t => t.status === currentFilter);
    if (currentImprint !== 'all') {
        visible = visible.filter(t => t.imprint.toLowerCase().replace(/\s+/g, '-') === currentImprint);
    }
    // Filter by scope toggle
    if (currentScope === 'mine') {
        visible = visible.filter(t => t.assignedTo?.id === currentUser.id);
    } else if (currentScope === 'unassigned') {
        visible = visible.filter(t => t.assignedTo === null);
    }
    // Apply sort (centralized so all callers get consistent ordering)
    const dir = sortDirection === 'asc' ? 1 : -1;
    if (currentSort === 'artist') {
        visible = visible.slice().sort((a, b) => dir * a.artist.localeCompare(b.artist));
    } else if (currentSort === 'popularity') {
        visible = visible.slice().sort((a, b) => dir * ((a.followers || 0) - (b.followers || 0)));
    } else if (currentSort === 'genre') {
        visible = visible.slice().sort((a, b) => dir * a.genre.localeCompare(b.genre));
    } else if (currentSort === 'imprint') {
        visible = visible.slice().sort((a, b) => dir * a.imprint.localeCompare(b.imprint));
    } else if (currentSort === 'date') {
        if (sortDirection === 'desc') visible = visible.slice().reverse();
    }
    return visible;
}

// ===== STATUS-AWARE ACTION BUTTONS =====
const svgIcons = {
    decline: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>',
    shortlist: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>',
    accept: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>',
    revert: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"/></svg>',
    onboarding: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>',
    onboardingSent: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    reconsider: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>',
};

function getHeroActions(t) {
    if (t.status === 'new') {
        return `
            <button class="detail-action-btn decline" id="heroDecline">Decline <span class="kbd">D</span></button>
            <button class="detail-action-btn shortlist" id="heroShortlist">Shortlist <span class="kbd">S</span></button>
            <button class="detail-action-btn accept" id="heroAccept">Accept <span class="kbd">A</span></button>
        `;
    } else if (t.status === 'shortlisted') {
        return `
            <button class="detail-action-btn decline" id="heroDecline">Decline <span class="kbd">D</span></button>
            <button class="detail-action-btn accept" id="heroAccept">Accept <span class="kbd">A</span></button>
            <button class="detail-action-btn revert" id="heroRevert">Move to New <span class="kbd">R</span></button>
        `;
    } else if (t.status === 'accepted') {
        return t.onboardingSent
            ? `<button class="detail-action-btn onboarding-sent" id="heroOnboarding" disabled>${svgIcons.onboardingSent} Onboarding Sent</button>
               <button class="detail-action-btn revert" id="heroRevert">Move to Shortlist <span class="kbd">R</span></button>`
            : `<button class="detail-action-btn onboarding-cta" id="heroOnboarding">Start Onboarding ${svgIcons.onboarding}</button>
               <button class="detail-action-btn revert" id="heroRevert">Move to Shortlist <span class="kbd">R</span></button>`;
    } else if (t.status === 'declined') {
        return `<button class="detail-action-btn reconsider" id="heroReconsider">Reconsider <span class="kbd">R</span></button>`;
    }
    return '';
}

function wireHeroActions(trackId) {
    const t = tracks.find(tr => tr.id === trackId);
    if (!t) return;

    const declineBtn = document.getElementById('heroDecline');
    const shortlistBtn = document.getElementById('heroShortlist');
    const acceptBtn = document.getElementById('heroAccept');
    const revertBtn = document.getElementById('heroRevert');
    const reconsiderBtn = document.getElementById('heroReconsider');
    const onboardingBtn = document.getElementById('heroOnboarding');

    if (declineBtn) declineBtn.addEventListener('click', () => showConfirm('decline', trackId));
    if (shortlistBtn) shortlistBtn.addEventListener('click', () => doAction('shortlist', trackId));
    if (acceptBtn) acceptBtn.addEventListener('click', () => showConfirm('accept', trackId));
    if (revertBtn) revertBtn.addEventListener('click', () => doRevert(trackId));
    if (reconsiderBtn) reconsiderBtn.addEventListener('click', () => doReconsider(trackId));
    if (onboardingBtn && !t.onboardingSent) onboardingBtn.addEventListener('click', () => showOnboarding(trackId));
}

// ===== RENDER TRACKS =====
function renderTracks() {
    let visible = getVisibleTracks(); // already filtered + sorted
    const maxFollowers = Math.max(...tracks.map(t => t.followers || 0));
    if (visible.length === 0) {
        trackList.innerHTML = '';
        emptyState.classList.add('visible');
        return;
    }
    emptyState.classList.remove('visible');

    trackList.innerHTML = visible.map((t, i) => `
        <div class="track-row ${i === focusedIndex ? 'focused' : ''} ${playingId === t.id && !audioEl.paused ? 'playing' : ''} ${bulkSelected.has(t.id) ? 'selected' : ''}"
             data-id="${t.id}" data-index="${i}">
            <div class="track-info">
                <div class="track-number">${i + 1}</div>
                <div class="track-artwork">
                    <img src="${t.artwork || t.avatar}" alt="${t.track}">
                    <button class="track-play-btn" data-action="play">
                        <svg class="play-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                        <svg class="pause-icon" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>
                        <div class="playing-anim"><span></span><span></span><span></span><span></span></div>
                    </button>
                </div>
                <div class="track-text">
                    <div class="track-name" data-action="detail">${t.track}</div>
                    <div class="track-artist-name" data-action="artist">${t.artist}</div>
                </div>
            </div>
            <div class="track-assignee" data-action="assign">
                ${t.assignedTo
                    ? `<img class="assignee-avatar" src="${t.assignedTo.avatar}" alt="${t.assignedTo.name}" title="${t.assignedTo.name}">`
                    : `<div class="assignee-ghost"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.5v15m7.5-7.5h-15"/></svg></div>`
                }
            </div>
            <div class="track-popularity">
                <span class="popularity-count" style="color:${popularityColor(t.followers || 0, maxFollowers)}">${formatFollowers(t.followers || 0)}</span>
                <div class="popularity-bar-track">
                    <div class="popularity-bar-fill" style="width:${Math.round((t.followers || 0) / maxFollowers * 100)}%;background:${popularityColor(t.followers || 0, maxFollowers)}"></div>
                </div>
            </div>
            <div><span class="genre-tag ${t.genreClass}">${t.genre}</span></div>
            <div class="track-imprint">${t.imprint}</div>
            <div class="track-date">${t.date}</div>
        </div>
    `).join('');

    // Attach click handlers
    trackList.querySelectorAll('.track-row').forEach(row => {
        const id = parseInt(row.dataset.id);
        const index = parseInt(row.dataset.index);

        // Double click to play
        row.addEventListener('dblclick', (e) => {
            if (e.target.closest('[data-action]')) return;
            togglePlay(id);
        });

        // Single click to focus — or Ctrl/Shift+click for bulk select
        row.addEventListener('click', (e) => {
            if (e.target.closest('[data-action]')) return;
            if (e.ctrlKey || e.metaKey) {
                // Starting a new multi-select? Include the currently focused row
                if (bulkSelected.size === 0) {
                    const focusedTrack = visible[focusedIndex];
                    if (focusedTrack) bulkSelected.add(focusedTrack.id);
                }
                // Toggle the clicked row
                if (bulkSelected.has(id)) {
                    bulkSelected.delete(id);
                } else {
                    bulkSelected.add(id);
                }
                lastSelectedIndex = index;
                updateBulkBar();
                renderTracks();
                return;
            }
            if (e.shiftKey && lastSelectedIndex !== null) {
                // Range select — replace existing selection with new range
                bulkSelected.clear();
                const start = Math.min(lastSelectedIndex, index);
                const end = Math.max(lastSelectedIndex, index);
                for (let j = start; j <= end; j++) {
                    bulkSelected.add(visible[j].id);
                }
                updateBulkBar();
                renderTracks();
                return;
            }
            // Normal click — clear any bulk selection, focus row, update hero
            const hadBulk = bulkSelected.size > 0;
            bulkSelected.clear();
            updateBulkBar();
            lastSelectedIndex = index;
            if (hadBulk) {
                focusedIndex = index;
                renderTracks();
            }
            setFocus(index);
        });

        // Play button
        row.querySelector('[data-action="play"]').addEventListener('click', (e) => {
            e.stopPropagation();
            togglePlay(id);
        });

        // Artist name click
        const artistEl = row.querySelector('[data-action="artist"]');
        if (artistEl) {
            artistEl.addEventListener('click', (e) => {
                e.stopPropagation();
                showArtistPopup(id, e);
            });
        }

        // Track name click — open detail drawer
        const trackNameEl = row.querySelector('[data-action="detail"]');
        if (trackNameEl) {
            trackNameEl.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleDetailDrawer(id);
            });
        }

        // Assignee avatar click — open assign dropdown
        const assignEl = row.querySelector('[data-action="assign"]');
        if (assignEl) {
            assignEl.addEventListener('click', (e) => {
                e.stopPropagation();
                showAssignDropdown(id, assignEl);
            });
        }
    });

    // If drawer is open, sync it to the currently visible track (it may have moved)
    if (expandedTrackId !== null) {
        const stillVisible = visible.find(t => t.id === expandedTrackId);
        if (!stillVisible) {
            // Track was filtered out — close drawer
            closeDetailDrawer();
        }
    }

}

// ===== FOCUS =====
function setFocus(index) {
    const visible = getVisibleTracks();
    const newIndex = Math.max(0, Math.min(index, visible.length - 1));

    // Toggle focus CSS classes (no full re-render needed)
    const oldRow = trackList.querySelector(`.track-row[data-index="${focusedIndex}"]`);
    const newRow = trackList.querySelector(`.track-row[data-index="${newIndex}"]`);
    if (oldRow && newRow && focusedIndex !== newIndex) {
        oldRow.classList.remove('focused');
        newRow.classList.add('focused');
    }
    focusedIndex = newIndex;
    scrollToFocused();
    // Auto-sync detail drawer to focused track
    if (expandedTrackId !== null) {
        const focusedTrack = visible[focusedIndex];
        if (focusedTrack) {
            expandedTrackId = focusedTrack.id;
            updateDetailDrawer(focusedTrack);
        }
    }
}

function scrollToFocused() {
    const row = trackList.querySelector(`.track-row[data-index="${focusedIndex}"]`);
    if (row) row.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

// ===== PLAY/PAUSE =====
function togglePlay(id) {
    if (playingId === id && !audioEl.paused) {
        // Pause current track — keep playingId so resume works
        audioEl.pause();
    } else {
        // Resume AudioContext if suspended (browser policy)
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const t = tracks.find(tr => tr.id === id);
        if (!t) return;

        if (playingId !== id) {
            // Different track — load it fresh
            audioEl.src = t.audio;
            audioEl.load();
            playingId = id;
            updateNowPlaying(id);
        }
        // Resume or start
        audioEl.play().catch(() => {});
        if (playingId !== id) playingId = id;
        startProgressLoop();
    }
    // Sync focusedIndex so arrow keys always continue from this track
    const visible = getVisibleTracks();
    const idx = visible.findIndex(tr => tr.id === id);
    if (idx !== -1) focusedIndex = idx;
    renderTracks();
    updateNPIcons();
    updateNPActions();
    // Hero always follows the playing track
    updateHeroDetail(playingId);
}

function playPrev() {
    const visible = getVisibleTracks();
    const idx = visible.findIndex(t => t.id === playingId);
    if (idx > 0) {
        const prev = visible[idx - 1];
        setFocus(idx - 1);
        togglePlay(prev.id);
    }
}

function playNext() {
    const visible = getVisibleTracks();
    const idx = visible.findIndex(t => t.id === playingId);
    if (idx >= 0 && idx < visible.length - 1) {
        const next = visible[idx + 1];
        setFocus(idx + 1);
        togglePlay(next.id);
    }
}

function updateNowPlaying(id) {
    const t = tracks.find(tr => tr.id === id);
    if (!t) return;
    // Bottom bar
    document.getElementById('npTrack').textContent = t.track;
    document.getElementById('npArtist').textContent = t.artist;
    document.getElementById('npArtwork').querySelector('img').src = t.artwork || t.avatar;
    // Hero is updated via setFocus → updateHeroDetail
    loadWaveformForTrack(id);
}

let heroTrackId = null;

function updateHeroVisibility() {
    const idleEl = document.getElementById('npHeroEmpty');
    const detailEl = document.getElementById('npHeroDetail');
    const visible = getVisibleTracks();
    if (visible.length > 0) {
        // Tracks exist — show detail state
        idleEl.style.display = 'none';
        detailEl.style.display = 'grid';
        requestAnimationFrame(() => redrawWaveforms());
    } else {
        // No tracks — show idle state
        idleEl.style.display = 'flex';
        detailEl.style.display = 'none';
    }
    // Update idle title (context-aware)
    const titleEl = document.getElementById('heroIdleTitle');
    if (titleEl) {
        if (currentFilter === 'new') titleEl.textContent = 'All caught up';
        else if (currentFilter === 'shortlisted') titleEl.textContent = 'No shortlisted demos';
        else if (currentFilter === 'accepted') titleEl.textContent = 'No accepted demos';
        else if (currentFilter === 'declined') titleEl.textContent = 'No declined demos';
        else titleEl.textContent = 'No demos here';
    }
    // Update idle subtitle (scope-aware)
    let idleText = `${visible.length} demo${visible.length !== 1 ? 's' : ''} in this view`;
    if (currentScope === 'mine') idleText = `${visible.length} demo${visible.length !== 1 ? 's' : ''} assigned to you`;
    else if (currentScope === 'unassigned') idleText = `${visible.length} unassigned demo${visible.length !== 1 ? 's' : ''}`;
    document.getElementById('heroIdleCount').textContent = idleText;
}

function buildFlagsHtml(t) {
    const checkSvg = '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>';
    const xSvg = '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>';
    const warnSvg = '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>';
    let html = '';
    if (t.isOriginal) html += '<span class="detail-flag flag-yes">' + checkSvg + ' Original</span>';
    if (t.isRemix) html += '<span class="detail-flag flag-caution">' + warnSvg + ' Remix</span>';
    if (t.isInstrumental) html += '<span class="detail-flag flag-yes">' + checkSvg + ' Instrumental</span>';
    if (t.aiUsage === 'predominantly') html += '<span class="detail-flag flag-warn">' + warnSvg + ' AI (Predominantly)</span>';
    else if (t.aiUsage === 'not_predominantly') html += '<span class="detail-flag flag-caution">' + warnSvg + ' AI (Not Predominantly)</span>';
    else html += '<span class="detail-flag flag-yes">' + checkSvg + ' No AI</span>';
    if (t.isExclusive) html += '<span class="detail-flag flag-yes">' + checkSvg + ' Exclusive</span>';
    else html += '<span class="detail-flag flag-no">' + xSvg + ' Not Exclusive</span>';
    if (t.samplesCleared) html += '<span class="detail-flag flag-yes">' + checkSvg + ' Samples Cleared</span>';
    else html += '<span class="detail-flag flag-warn">' + warnSvg + ' Samples Not Cleared</span>';
    return html;
}

function updateHeroDetail(trackId) {
    if (!trackId) return;
    const t = tracks.find(tr => tr.id === trackId);
    if (!t) return;
    heroTrackId = trackId;

    // Show detail state
    document.getElementById('npHeroEmpty').style.display = 'none';
    document.getElementById('npHeroDetail').style.display = 'grid';

    // Status label — reflects play state + pipeline status
    const statusEl = document.getElementById('npHeroStatus');
    const isPlaying = playingId === trackId;
    if (t.status === 'new') {
        statusEl.textContent = isPlaying ? 'Now playing' : 'Next in queue';
    } else if (t.status === 'shortlisted') {
        statusEl.textContent = isPlaying ? 'Now playing · Shortlisted' : 'Shortlisted';
    } else if (t.status === 'accepted') {
        statusEl.textContent = t.onboardingSent ? 'Accepted · Onboarding sent' : 'Accepted';
    } else if (t.status === 'declined') {
        statusEl.textContent = 'Declined';
    }
    statusEl.classList.toggle('is-playing', isPlaying);

    // Waveform (load for this track)
    loadWaveformForTrack(trackId);

    // Waveform times — reset (progress loop will update if playing)
    document.getElementById('npHeroTimeStart').textContent = '0:00';
    document.getElementById('npHeroTimeEnd').textContent = t.duration ? formatTime(t.duration) : '0:00';

    // Artwork
    document.getElementById('npHeroArtwork').querySelector('img').src = t.artwork || t.avatar;

    // Track + Artist
    document.getElementById('npHeroTrack').textContent = t.track;
    const heroArtistEl = document.getElementById('npHeroArtist');
    heroArtistEl.textContent = t.artist;
    // Wire artist click (clone to remove old listener)
    const newArtistEl = heroArtistEl.cloneNode(true);
    heroArtistEl.parentNode.replaceChild(newArtistEl, heroArtistEl);
    newArtistEl.id = 'npHeroArtist';
    newArtistEl.addEventListener('click', (e) => {
        e.stopPropagation();
        showArtistPopup(trackId, e);
    });

    // Flags (uses shared helper)
    document.getElementById('npHeroFlags').innerHTML = buildFlagsHtml(t);

    // Assignee
    const assigneeEl = document.getElementById('npHeroAssignee');
    if (t.assignedTo) {
        assigneeEl.innerHTML = `
            <img class="detail-assignee-avatar" src="${t.assignedTo.avatar}" alt="${t.assignedTo.name}">
            <div class="detail-assignee-info">
                <div class="detail-assignee-label">Assigned to</div>
                <div class="detail-assignee-name">${t.assignedTo.name}</div>
            </div>
            <button class="detail-assignee-btn" id="heroReassign">Reassign</button>`;
    } else {
        assigneeEl.innerHTML = `
            <svg class="icon-md-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"/></svg>
            <div class="detail-assignee-info">
                <div class="detail-assignee-label">Assignment</div>
                <div class="detail-assignee-name text-tertiary">Unassigned</div>
            </div>
            <button class="detail-assignee-btn" id="heroReassign">Assign</button>`;
    }
    // Wire reassign button
    const reassignBtn = document.getElementById('heroReassign');
    if (reassignBtn) {
        reassignBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showAssignDropdown(trackId, reassignBtn);
        });
    }

    // Notes
    const notesEl = document.getElementById('npHeroNotes');
    notesEl.value = t.notes || '';
    // Replace element to remove old listeners
    const newNotesEl = notesEl.cloneNode(true);
    notesEl.parentNode.replaceChild(newNotesEl, notesEl);
    newNotesEl.addEventListener('input', () => { t.notes = newNotesEl.value; });
    newNotesEl.addEventListener('keydown', (e) => e.stopPropagation());

    // Dynamic hero action buttons (status-aware)
    const heroActionsEl = document.getElementById('npHeroActions');
    heroActionsEl.innerHTML = getHeroActions(t);
    wireHeroActions(trackId);

    // Sync hero play button state
    updateHeroPlayBtn();
}

// Helper: sync hero — playing track takes priority, then focused track, then idle
function syncHeroToFocus() {
    if (playingId !== null) {
        // Hero locked to playing track
        updateHeroDetail(playingId);
    } else {
        // Default: always show first track in queue
        const visible = getVisibleTracks();
        if (visible.length > 0) {
            updateHeroDetail(visible[0].id);
        } else {
            updateHeroVisibility();
        }
    }
}

// ===== TRACK EXPAND (Inline Detail Accordion) =====

function getSocialIcon(platform) {
    const icons = {
        spotify: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>',
        instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',
        youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
        soundcloud: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.057-.05-.1-.1-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.172 1.3c.013.06.045.094.104.094.057 0 .09-.035.099-.094l.201-1.3-.201-1.332c-.01-.06-.042-.094-.1-.094m1.794-1.168c-.066 0-.108.046-.113.115l-.21 2.479.21 2.4c.005.066.047.113.113.113.064 0 .108-.047.113-.113l.238-2.4-.238-2.479c-.005-.069-.049-.115-.113-.115m.89-.407c-.077 0-.126.055-.131.125l-.186 2.886.186 2.755c.005.074.054.125.131.125.076 0 .126-.051.131-.125l.209-2.755-.209-2.886c-.005-.07-.055-.125-.131-.125m.905-.236c-.084 0-.139.06-.139.139l-.166 3.122.166 2.955c0 .078.055.139.139.139.082 0 .139-.06.139-.139l.186-2.955-.186-3.122c0-.079-.057-.139-.139-.139m.906-.04c-.093 0-.148.069-.152.148l-.148 3.162.148 2.955c.004.079.059.148.152.148.091 0 .148-.069.148-.148l.166-2.955-.166-3.162c0-.079-.057-.148-.148-.148m1.037.12c0-.093-.065-.162-.155-.162-.088 0-.158.069-.162.162l-.131 3.043.131 2.932c.004.09.074.158.162.158.09 0 .155-.068.155-.158l.146-2.932-.146-3.043m.882-.354c-.098 0-.178.074-.182.176l-.107 3.397.107 2.895c.004.098.084.176.182.176.096 0 .176-.078.176-.176l.12-2.895-.12-3.397c0-.102-.08-.176-.176-.176m1.053.09c-.109 0-.193.084-.193.193v.001l-.088 3.307.088 2.863c0 .109.084.193.193.193.107 0 .193-.084.193-.193l.098-2.863-.098-3.307v-.001c0-.109-.086-.193-.193-.193m.914-.328c0-.117-.088-.209-.205-.209-.116 0-.209.092-.209.209v.001l-.066 3.535.066 2.828c0 .116.093.209.209.209.117 0 .205-.092.205-.209l.074-2.828-.074-3.536m1.08.33c-.121 0-.221.098-.221.221l-.037 3.205.037 2.785c0 .121.1.221.221.221.121 0 .221-.1.221-.221l.041-2.785-.041-3.205c0-.123-.1-.221-.221-.221m.872-.687c-.121 0-.227.105-.232.227l-.023 3.892.023 2.756c.005.121.111.227.232.227.121 0 .227-.106.227-.227l.025-2.756-.025-3.892c0-.122-.106-.227-.227-.227m1.099.236c-.131 0-.242.111-.242.242l-.006 3.656.006 2.725c0 .131.111.242.242.242.131 0 .241-.111.241-.242l.008-2.725-.008-3.656c0-.131-.11-.242-.241-.242m1.036-.503c-.137 0-.252.115-.252.252l.004 4.159-.004 2.695c0 .137.115.252.252.252.137 0 .252-.115.252-.252l.004-2.695-.004-4.159c0-.137-.115-.252-.252-.252m4.588 1.926c-.408 0-.801.072-1.164.205-.242-2.748-2.578-4.893-5.435-4.893-.713 0-1.398.15-2.016.395-.233.09-.295.185-.295.368v9.578c0 .193.15.354.34.374 .007.001 8.562.001 8.57.001 1.587 0 2.873-1.288 2.873-2.873 0-1.587-1.286-2.873-2.873-2.873"/></svg>'
    };
    return icons[platform] || '';
}

function renderExpandedContent(t) {
    const flagsHtml = buildFlagsHtml(t);
    const email = t.email || t.artist.toLowerCase().replace(/[^a-z0-9]/g, '') + '@email.com';

    // Build socials HTML
    const socialsHtml = Object.entries(t.socials || {})
        .filter(([, url]) => url)
        .map(([platform, url]) => {
            const name = platform.charAt(0).toUpperCase() + platform.slice(1);
            return '<a href="' + url + '" target="_blank" class="te-social-link">' + getSocialIcon(platform) + ' ' + name + '</a>';
        }).join('');

    const audioSpecs = [t.duration, t.sampleRate, t.bitDepth].filter(Boolean).join(' · ') || '--';

    return '' +
    // — Track identity —
    '<div class="dp-track-header">' +
        '<img class="dp-track-artwork" src="' + t.artwork + '" alt="">' +
        '<div class="dp-track-name">' + t.track + '</div>' +
    '</div>' +

    // — Track Details (first — this is what you're reviewing) —
    '<div class="dp-section">' +
        '<div class="dp-section-label">Track</div>' +
        '<div class="dp-audio-specs">' + audioSpecs + '</div>' +
        '<div class="dp-row">' +
            '<span class="dp-row-label">Genre</span>' +
            '<span class="genre-tag ' + t.genreClass + '">' + t.genre + '</span>' +
        '</div>' +
        (t.submittedTo
            ? '<div class="dp-row"><span class="dp-row-label">Submitted to</span><span class="dp-row-value">' + t.submittedTo + '</span></div>'
            : '') +
        '<div class="dp-row">' +
            '<span class="dp-row-label">Imprint</span>' +
            '<span class="dp-row-value">' + t.imprint + '</span>' +
        '</div>' +
        '<div class="dp-flags">' + flagsHtml + '</div>' +
    '</div>' +

    // — Notes (working area) —
    '<div class="dp-divider"></div>' +
    '<div class="dp-section">' +
        '<div class="dp-section-label">Notes <span class="dp-notes-hint">Internal · never sent to artist</span></div>' +
        '<textarea class="dp-notes" id="teNotes_' + t.id + '" placeholder="Add notes for your team..." maxlength="5000">' + (t.releaseNotes || '') + '</textarea>' +
        '<div class="dp-notes-footer">' +
            '<span class="rd-notes-counter" id="teNotesCounter_' + t.id + '">' + (t.releaseNotes || '').length + '/5000</span>' +
            '<div class="rd-notes-actions">' +
                '<button class="rd-btn-ghost" data-te-action="clear-notes">Clear</button>' +
                '<button class="rd-btn-primary" data-te-action="save-notes">Save</button>' +
            '</div>' +
        '</div>' +
    '</div>' +

    // — Artist card (boxed, bottom) —
    '<div class="dp-artist-card">' +
        '<div class="dp-card-label">Artist</div>' +
        '<div class="dp-artist-header">' +
            '<img class="dp-artist-avatar" src="' + t.avatar + '" alt="">' +
            '<div class="dp-artist-info">' +
                '<div class="dp-artist-name">' + t.artist + '</div>' +
                '<div class="dp-artist-followers">' + formatFollowers(t.followers || 0) + ' followers</div>' +
            '</div>' +
        '</div>' +
        '<div class="dp-artist-contact">' +
            '<span class="dp-email">' + email + '</span>' +
            '<div class="dp-contact-actions">' +
                '<button class="rd-btn-secondary" data-te-action="message"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="14" height="14"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/></svg> Message</button>' +
                '<button class="rd-btn-ghost" data-te-action="feedback">Feedback</button>' +
            '</div>' +
        '</div>' +
        (socialsHtml ? '<div class="dp-artist-socials">' + socialsHtml + '</div>' : '') +
        '<div class="dp-stats-row">' +
            '<div class="dp-stat"><span class="dp-stat-value">' + t.submissions + '</span><span class="dp-stat-label">Submissions</span></div>' +
            '<div class="dp-stat"><span class="dp-stat-value">' + t.accepted + '</span><span class="dp-stat-label">Accepted</span></div>' +
            '<div class="dp-stat"><span class="dp-stat-value">' + t.firstSub + '</span><span class="dp-stat-label">First Sub</span></div>' +
            '<div class="dp-stat"><span class="dp-stat-value">' + t.lastSub + '</span><span class="dp-stat-label">Latest</span></div>' +
        '</div>' +
    '</div>';
}

function toggleDetailDrawer(trackId) {
    if (expandedTrackId === trackId) {
        closeDetailDrawer();
        return;
    }
    expandedTrackId = trackId;
    const t = tracks.find(tr => tr.id === trackId);
    if (!t) return;
    updateDetailDrawer(t);
    document.getElementById('detailPanel').classList.add('open');
}

function closeDetailDrawer() {
    expandedTrackId = null;
    document.getElementById('detailPanel').classList.remove('open');
}

function updateDetailDrawer(t) {
    const scroll = document.getElementById('dpScroll');
    scroll.innerHTML = renderExpandedContent(t);
    wireExpandedEvents(scroll, t);
}

function wireExpandedEvents(expandEl, t) {
    const textarea = expandEl.querySelector('#teNotes_' + t.id);
    const counter = expandEl.querySelector('#teNotesCounter_' + t.id);

    if (textarea) {
        textarea.addEventListener('input', () => {
            if (counter) counter.textContent = textarea.value.length + '/5000';
        });
        textarea.addEventListener('keydown', (e) => e.stopPropagation());
    }

    expandEl.querySelectorAll('[data-te-action]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const action = btn.dataset.teAction;
            if (action === 'save-notes') {
                t.releaseNotes = textarea ? textarea.value : '';
                showToast('Release notes saved', 'shortlist');
            } else if (action === 'clear-notes') {
                if (textarea) {
                    textarea.value = '';
                    t.releaseNotes = '';
                    if (counter) counter.textContent = '0/5000';
                }
                showToast('Notes cleared');
            } else if (action === 'message') {
                // Switch to conversations view and open/create a conversation for this track
                const conv = conversations.find(c => c.trackId === t.id);
                if (conv) {
                    switchView('conversations');
                    setTimeout(() => openConversation(conv.id), 100);
                } else {
                    showToast('Starting conversation with ' + t.artist);
                }
            } else if (action === 'feedback') {
                showToast('Send feedback to ' + t.artist);
            } else if (action === 'move-to-label') {
                showToast('Moved to label inbox', 'accept');
            }
        });
    });
}

// ===== ACTIONS =====
let pendingAction = null;

function showConfirm(action, id) {
    const t = tracks.find(tr => tr.id === id);
    if (!t) return;
    pendingAction = { action, id };

    const title = document.getElementById('confirmTitle');
    const desc = document.getElementById('confirmDesc');
    const btn = document.getElementById('confirmAction');
    const feedbackSection = document.getElementById('declineFeedback');
    const textarea = document.getElementById('declineTextarea');

    if (action === 'decline') {
        title.textContent = 'Decline Submission';
        desc.textContent = `Add optional feedback before declining ${t.track} by ${t.artist}. Artists only see what you share here.`;
        btn.innerHTML = 'Decline <span class="confirm-kbd">↵</span>';
        btn.className = 'confirm-btn confirm-decline';
        feedbackSection.classList.add('visible');
        textarea.value = '';
        document.getElementById('declineCharCount').textContent = '0/2000';
        feedbackSection.querySelectorAll('.decline-reason').forEach(r => r.classList.remove('active'));
    } else if (action === 'accept') {
        title.textContent = 'Accept this demo?';
        desc.textContent = `This will accept "${t.track}" by ${t.artist} and move it to Accepted.`;
        btn.innerHTML = 'Accept <span class="confirm-kbd">↵</span>';
        btn.className = 'confirm-btn confirm-accept';
        feedbackSection.classList.remove('visible');
    }

    confirmOverlay.classList.add('visible');
}

function hideConfirm() {
    confirmOverlay.classList.remove('visible');
    pendingAction = null;
    // Reset decline feedback
    const fb = document.getElementById('declineFeedback');
    fb.classList.remove('visible');
    document.getElementById('declineTextarea').value = '';
    fb.querySelectorAll('.decline-reason').forEach(r => r.classList.remove('active'));
}

function doAction(action, id) {
    const t = tracks.find(tr => tr.id === id);
    if (!t) return;

    const oldStatus = t.status;
    let message = '';
    let toastClass = '';

    if (action === 'decline') {
        t.status = 'declined';
        message = `Declined "${t.track}" by ${t.artist}`;
        toastClass = 'decline';
    } else if (action === 'shortlist') {
        t.status = 'shortlisted';
        message = `Shortlisted "${t.track}" by ${t.artist}`;
        toastClass = 'shortlist';
    } else if (action === 'accept') {
        t.status = 'accepted';
        message = `Accepted "${t.track}" by ${t.artist}`;
        toastClass = 'accept';
    }

    // If the acted-upon track was playing, pause and clear
    if (playingId === id) {
        audioEl.pause();
        playingId = null;
        updateNPIcons();
        updateNPActions();
    }

    // Clamp focusedIndex to new visible list length
    const visible = getVisibleTracks();
    if (focusedIndex >= visible.length) focusedIndex = Math.max(0, visible.length - 1);

    renderTracks();
    showToast(message, toastClass, { trackId: id, oldStatus });
    updateCount();
    if (currentView === 'dashboard') renderDashboard();

    // Sync hero — if still playing something, hero stays on that; otherwise focused/idle
    syncHeroToFocus();
}

function doRevert(id) {
    const t = tracks.find(tr => tr.id === id);
    if (!t) return;
    const revertMap = { shortlisted: 'new', accepted: 'shortlisted' };
    const newStatus = revertMap[t.status];
    if (!newStatus) return;
    const oldStatus = t.status;
    t.status = newStatus;
    if (t.status === 'shortlisted') t.onboardingSent = false;

    const visible = getVisibleTracks();
    if (focusedIndex >= visible.length) focusedIndex = Math.max(0, visible.length - 1);

    renderTracks();
    const label = newStatus.charAt(0).toUpperCase() + newStatus.slice(1);
    showToast(`Moved "${t.track}" to ${label}`, 'shortlist', { trackId: id, oldStatus });
    updateCount();
    if (currentView === 'dashboard') renderDashboard();
    syncHeroToFocus();
}

function doReconsider(id) {
    const t = tracks.find(tr => tr.id === id);
    if (!t || t.status !== 'declined') return;
    const oldStatus = t.status;
    t.status = 'new';

    const visible = getVisibleTracks();
    if (focusedIndex >= visible.length) focusedIndex = Math.max(0, visible.length - 1);

    renderTracks();
    showToast(`Reconsidering "${t.track}" — moved to New`, 'shortlist', { trackId: id, oldStatus });
    updateCount();
    if (currentView === 'dashboard') renderDashboard();
    syncHeroToFocus();
}

let obCurrentStep = 1;
const OB_TOTAL_STEPS = 5;

function showOnboarding(id) {
    const t = tracks.find(tr => tr.id === id);
    if (!t || t.onboardingSent) return;
    const overlay = document.getElementById('onboardingOverlay');
    const email = t.artist.toLowerCase().replace(/\s+/g, '') + '@email.com';
    // Pre-fill across all steps
    document.getElementById('obReleaseName').value = t.track;
    document.getElementById('obTrackName').textContent = t.track;
    document.getElementById('obTrackArtwork').src = t.artwork || t.avatar;
    document.getElementById('obArtistName').textContent = t.artist;
    document.getElementById('obArtistEmail').textContent = email;
    document.getElementById('obSplitsArtist').textContent = email;
    document.getElementById('obConfirmName').textContent = t.track;
    document.getElementById('obConfirmTrack').textContent = t.track;
    document.getElementById('obConfirmArtist').textContent = t.artist;
    document.getElementById('obConfirmEmail').textContent = email;
    // Reset to step 1
    obCurrentStep = 1;
    updateObStep();
    overlay.classList.add('visible');
    overlay.dataset.trackId = id;
}

function hideOnboarding() {
    document.getElementById('onboardingOverlay').classList.remove('visible');
}

function updateObStep() {
    // Update step indicators
    document.querySelectorAll('#obSteps .ob-step').forEach(s => {
        const step = parseInt(s.dataset.step);
        s.classList.remove('active', 'completed');
        if (step === obCurrentStep) s.classList.add('active');
        else if (step < obCurrentStep) s.classList.add('completed');
    });
    // Update connecting lines
    const lines = document.querySelectorAll('#obSteps .ob-step-line');
    lines.forEach((line, i) => {
        line.classList.toggle('completed', (i + 1) < obCurrentStep);
    });
    // Show/hide pages
    document.querySelectorAll('.ob-page').forEach(p => {
        p.classList.toggle('active', parseInt(p.dataset.page) === obCurrentStep);
    });
    // Footer buttons
    const prevBtn = document.getElementById('obPrev');
    const nextBtn = document.getElementById('obNext');
    const cancelBtn = document.getElementById('onboardingCancel');
    const draftBtn = document.getElementById('obDraft');
    const sendBtn = document.getElementById('onboardingSend');
    const isLast = obCurrentStep === OB_TOTAL_STEPS;
    prevBtn.style.display = obCurrentStep > 1 ? '' : 'none';
    nextBtn.style.display = isLast ? 'none' : '';
    cancelBtn.style.display = isLast ? 'none' : '';
    draftBtn.style.display = isLast ? '' : 'none';
    sendBtn.style.display = isLast ? '' : 'none';
    // Sync confirm name from input
    if (isLast) {
        document.getElementById('obConfirmName').textContent = document.getElementById('obReleaseName').value || '—';
    }
}

function showToast(message, className, undoInfo) {
    clearTimeout(toastTimer);
    toast.className = `toast ${className}`;
    toast.innerHTML = `
        <span class="toast-msg">${message}</span>
        ${undoInfo ? '<button class="toast-undo">Undo</button>' : ''}
    `;
    if (undoInfo) {
        toast.querySelector('.toast-undo').addEventListener('click', () => {
            const t = tracks.find(tr => tr.id === undoInfo.trackId);
            if (t) {
                t.status = undoInfo.oldStatus;
                renderTracks();
                updateCount();
                syncHeroToFocus();
            }
            toast.classList.remove('visible');
        });
    }
    requestAnimationFrame(() => toast.classList.add('visible'));
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 4000);
}

function updateCount() {
    // Scope by imprint if one is selected
    let pool = tracks;
    if (currentImprint !== 'all') {
        pool = tracks.filter(t => t.imprint.toLowerCase().replace(/\s+/g, '-') === currentImprint);
    }

    // Sidebar stage badge counts — always based on imprint pool (total pipeline health)
    const newCount        = pool.filter(t => t.status === 'new').length;
    const shortlistCount  = pool.filter(t => t.status === 'shortlisted').length;
    const acceptedCount   = pool.filter(t => t.status === 'accepted').length;
    const declinedCount   = pool.filter(t => t.status === 'declined').length;

    const navNew = document.getElementById('navStageNew');
    const navShort = document.getElementById('navStageShortlisted');
    const navAcc = document.getElementById('navStageAccepted');
    const navDec = document.getElementById('navStageDeclined');
    if (navNew) navNew.textContent = newCount || '';
    if (navShort) navShort.textContent = shortlistCount || '';
    if (navAcc) navAcc.textContent = acceptedCount || '';
    if (navDec) navDec.textContent = declinedCount || '';

    // Total count on Submissions parent badge
    const navSubTotal = document.getElementById('navSubmissionsCount');
    if (navSubTotal) navSubTotal.textContent = (newCount + shortlistCount + acceptedCount + declinedCount) || '';
}

function updateEmptyText() {
    const titleEl = document.querySelector('.empty-title');
    const descEl = document.querySelector('.empty-desc');
    if (!titleEl || !descEl) return;

    if (currentFilter === 'new') {
        if (currentScope === 'mine') {
            titleEl.textContent = 'No new demos assigned to you';
            descEl.textContent = 'Switch scope to see all new demos, or ask your team lead to assign some.';
        } else if (currentScope === 'unassigned') {
            titleEl.textContent = 'No unassigned demos';
            descEl.textContent = 'All new demos have been assigned. Nice work!';
        } else {
            titleEl.textContent = 'No demos to review right now';
            descEl.textContent = 'New submissions will appear here automatically.';
        }
    } else if (currentFilter === 'shortlisted') {
        titleEl.textContent = 'No shortlisted demos';
        descEl.textContent = 'Tracks you shortlist will appear here for further review.';
    } else if (currentFilter === 'accepted') {
        titleEl.textContent = 'No accepted demos yet';
        descEl.textContent = 'Demos you accept will appear here, ready for release planning.';
    } else if (currentFilter === 'declined') {
        titleEl.textContent = 'No declined demos';
        descEl.textContent = 'Tracks you pass on will be archived here.';
    }
}

// ===== ASSIGNMENT SYSTEM =====
let assignDropdownEl = null;

function assignTrack(trackId, member) {
    const t = tracks.find(tr => tr.id === trackId);
    if (!t) return;
    t.assignedTo = member;
    renderTracks();
    updateCount();
    if (currentView === 'dashboard') renderDashboard();
    if (member) {
        showToast(`Assigned to ${member.name}`, 'shortlist');
    } else {
        showToast('Unassigned', 'decline');
    }
    // Refresh hero if showing this track
    if (heroTrackId === trackId) updateHeroDetail(trackId);
}

function showAssignDropdown(trackId, anchorEl) {
    hideAssignDropdown();
    const t = tracks.find(tr => tr.id === trackId);
    if (!t) return;

    const dd = document.createElement('div');
    dd.className = 'assign-dropdown';
    dd.innerHTML = `
        <div class="assign-dropdown-title">Assign to</div>
        ${teamMembers.map(m => `
            <div class="assign-option ${t.assignedTo?.id === m.id ? 'active' : ''}" data-user-id="${m.id}">
                <img src="${m.avatar}" alt="${m.name}">
                ${m.name}${m.id === currentUser.id ? ' <span class="assign-you">(You)</span>' : ''}
            </div>
        `).join('')}
        ${t.assignedTo ? `
            <div class="assign-option assign-option-unassign" data-user-id="unassign">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
                Unassign
            </div>
        ` : ''}
    `;

    document.body.appendChild(dd);
    assignDropdownEl = dd;

    // Position near anchor
    const rect = anchorEl.getBoundingClientRect();
    dd.style.top = (rect.bottom + 4) + 'px';
    dd.style.left = Math.max(8, rect.left - 60) + 'px';

    // Ensure it doesn't go off-screen
    requestAnimationFrame(() => {
        const ddRect = dd.getBoundingClientRect();
        if (ddRect.right > window.innerWidth - 8) {
            dd.style.left = (window.innerWidth - ddRect.width - 8) + 'px';
        }
        if (ddRect.bottom > window.innerHeight - 8) {
            dd.style.top = (rect.top - ddRect.height - 4) + 'px';
        }
    });

    // Click handlers
    dd.querySelectorAll('.assign-option').forEach(opt => {
        opt.addEventListener('click', (e) => {
            e.stopPropagation();
            const userId = opt.dataset.userId;
            if (userId === 'unassign') {
                assignTrack(trackId, null);
            } else {
                const member = teamMembers.find(m => m.id === userId);
                if (member) assignTrack(trackId, { ...member });
            }
            hideAssignDropdown();
        });
    });

    // Close on outside click (deferred to avoid immediate close)
    setTimeout(() => {
        document.addEventListener('click', handleAssignClose);
    }, 0);
}

function handleAssignClose(e) {
    if (assignDropdownEl && !assignDropdownEl.contains(e.target)) {
        hideAssignDropdown();
    }
}

function hideAssignDropdown() {
    if (assignDropdownEl) {
        assignDropdownEl.remove();
        assignDropdownEl = null;
        document.removeEventListener('click', handleAssignClose);
    }
}

// ===== BULK SELECT =====
function updateBulkBar() {
    const bar = document.getElementById('bulkBar');
    const count = bulkSelected.size;
    if (count > 0) {
        bar.classList.add('visible');
        document.getElementById('bulkCount').textContent = `${count} selected`;
        trackList.classList.add('bulk-active');
    } else {
        bar.classList.remove('visible');
        trackList.classList.remove('bulk-active');
    }
}

function clearBulkSelection() {
    bulkSelected.clear();
    lastSelectedIndex = null;
    updateBulkBar();
    renderTracks();
}

document.getElementById('bulkDeselect').addEventListener('click', clearBulkSelection);

document.getElementById('bulkAssign').addEventListener('click', (e) => {
    e.stopPropagation();
    // Show assign dropdown anchored to the bulk assign button
    if (bulkSelected.size === 0) return;
    const btn = e.currentTarget;
    hideAssignDropdown();

    const dd = document.createElement('div');
    dd.className = 'assign-dropdown';
    dd.innerHTML = `
        <div class="assign-dropdown-title">Assign ${bulkSelected.size} tracks to</div>
        ${teamMembers.map(m => `
            <div class="assign-option" data-user-id="${m.id}">
                <img src="${m.avatar}" alt="${m.name}">
                ${m.name}${m.id === currentUser.id ? ' <span class="assign-you">(You)</span>' : ''}
            </div>
        `).join('')}
        <div class="assign-option assign-option-unassign" data-user-id="unassign">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
            Unassign all
        </div>
    `;

    document.body.appendChild(dd);
    assignDropdownEl = dd;

    const rect = btn.getBoundingClientRect();
    dd.style.top = (rect.bottom + 4) + 'px';
    dd.style.left = rect.left + 'px';

    dd.querySelectorAll('.assign-option').forEach(opt => {
        opt.addEventListener('click', (e) => {
            e.stopPropagation();
            const userId = opt.dataset.userId;
            const member = userId === 'unassign' ? null : teamMembers.find(m => m.id === userId);
            bulkSelected.forEach(trackId => {
                assignTrack(trackId, member ? { ...member } : null);
            });
            clearBulkSelection();
            hideAssignDropdown();
            if (member) {
                showToast(`Assigned ${bulkSelected.size || 'tracks'} to ${member.name}`, 'shortlist');
            }
        });
    });

    setTimeout(() => {
        document.addEventListener('click', handleAssignClose);
    }, 0);
});

// ===== CONFIRM MODAL =====
document.getElementById('confirmCancel').addEventListener('click', hideConfirm);
document.getElementById('confirmClose').addEventListener('click', hideConfirm);
document.getElementById('confirmAction').addEventListener('click', () => {
    if (pendingAction) {
        // Save any feedback if present
        if (pendingAction.action === 'decline') {
            const feedback = document.getElementById('declineTextarea').value.trim();
            if (feedback) {
                const t = tracks.find(tr => tr.id === pendingAction.id);
                if (t) t.declineFeedback = feedback;
            }
        }
        doAction(pendingAction.action, pendingAction.id);
        hideConfirm();
    }
});
confirmOverlay.addEventListener('click', (e) => {
    if (e.target === confirmOverlay) hideConfirm();
});

// Decline reason chips — single-select, auto-fill textarea with template
document.querySelectorAll('.decline-reason').forEach(chip => {
    chip.addEventListener('click', () => {
        const textarea = document.getElementById('declineTextarea');
        const wasActive = chip.classList.contains('active');

        // Clear all chips first (single-select)
        document.querySelectorAll('.decline-reason').forEach(r => r.classList.remove('active'));

        if (!wasActive) {
            chip.classList.add('active');
            const templates = {
                'Genre not a fit': 'Thanks for sending us your music! Unfortunately, this genre isn\'t the right fit for our label.',
                'Not right fit': 'Thanks for the submission! This one isn\'t quite the right fit for us at the moment.',
                'Keep in touch': 'Thanks for sharing your music with us! While this isn\'t the right fit right now, we\'d love to stay connected for future releases.'
            };
            textarea.value = templates[chip.dataset.reason] || '';
        } else {
            textarea.value = '';
        }

        document.getElementById('declineCharCount').textContent = textarea.value.length + '/2000';
    });
});

// Decline textarea — update char count
document.getElementById('declineTextarea').addEventListener('input', function() {
    document.getElementById('declineCharCount').textContent = this.value.length + '/2000';
});
document.getElementById('declineTextarea').addEventListener('keydown', e => e.stopPropagation());

// ===== ARTIST POPUP =====
function showArtistPopup(id, event) {
    // Toggle — if already showing this artist, close it
    if (artistPopup.classList.contains('visible') && artistPopup.dataset.trackId === String(id)) {
        artistPopup.classList.remove('visible');
        return;
    }
    const t = tracks.find(tr => tr.id === id);
    if (!t) return;
    artistPopup.dataset.trackId = String(id);

    document.getElementById('popupName').textContent = t.artist;
    document.getElementById('popupGenre').textContent = t.genre;
    document.getElementById('popupAvatar').src = t.avatar;
    document.getElementById('popupSubmissions').textContent = t.submissions;
    document.getElementById('popupAccepted').textContent = t.accepted;
    document.getElementById('popupFirstSub').textContent = t.firstSub;
    document.getElementById('popupLastSub').textContent = t.lastSub;
    document.getElementById('popupSpotify').href    = t.socials.spotify;
    document.getElementById('popupInstagram').href  = t.socials.instagram;
    document.getElementById('popupYoutube').href    = t.socials.youtube;
    document.getElementById('popupSoundcloud').href = t.socials.soundcloud;

    const rect = event.target.getBoundingClientRect();
    artistPopup.style.top = (rect.bottom + 8) + 'px';
    artistPopup.style.left = Math.min(rect.left, window.innerWidth - 300) + 'px';
    artistPopup.classList.add('visible');
}

document.getElementById('artistPopupClose').addEventListener('click', () => {
    artistPopup.classList.remove('visible');
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.artist-popup') && !e.target.closest('[data-action="artist"]')) {
        artistPopup.classList.remove('visible');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && artistPopup.classList.contains('visible')) {
        artistPopup.classList.remove('visible');
    }
});

// Artist popup "Message" button → open/create conversation
document.querySelector('.artist-msg-btn')?.addEventListener('click', () => {
    const artistName = document.getElementById('popupName').textContent;
    const artistTrack = tracks.find(t => t.artist === artistName);
    if (!artistTrack) return;

    // Find existing or create new conversation
    let conv = conversations.find(c => c.trackId === artistTrack.id);
    if (!conv) {
        conv = {
            id: 'conv-' + Date.now(),
            trackId: artistTrack.id,
            participants: ['label_team', 'artist'],
            unreadCount: 0,
            lastActivity: new Date(),
            messages: []
        };
        conversations.push(conv);
    }

    artistPopup.classList.remove('visible');
    switchView('conversations');
    openConversation(conv.id);
});

// ===== ONBOARDING MODAL =====
document.getElementById('onboardingClose').addEventListener('click', hideOnboarding);
document.getElementById('onboardingCancel').addEventListener('click', hideOnboarding);
document.getElementById('obNext').addEventListener('click', () => {
    if (obCurrentStep < OB_TOTAL_STEPS) { obCurrentStep++; updateObStep(); }
});
document.getElementById('obPrev').addEventListener('click', () => {
    if (obCurrentStep > 1) { obCurrentStep--; updateObStep(); }
});
document.getElementById('obDraft').addEventListener('click', () => {
    showToast('Draft saved', 'shortlist');
    hideOnboarding();
});
document.getElementById('onboardingSend').addEventListener('click', () => {
    const overlay = document.getElementById('onboardingOverlay');
    const trackId = parseInt(overlay.dataset.trackId);
    const t = tracks.find(tr => tr.id === trackId);
    if (t) {
        t.onboardingSent = true;
        // Create a release from this accepted track
        const relName = document.getElementById('obReleaseName')?.value || t.track;
        releases.push({
            id: 'rel-' + Date.now(),
            trackId: t.id,
            releaseName: relName,
            artistName: t.artist,
            artwork: t.artwork,
            avatar: t.avatar,
            imprint: t.imprint,
            imprintSlug: t.imprint.toLowerCase().replace(/\s+/g, '-'),
            date: new Date().toISOString().split('T')[0],
            status: 'requested',
            stepsComplete: 0,
            stepsTotal: 1,
            source: 'pipeline',
        });
        updateReleasesBadge();
        renderTracks();
        if (heroTrackId === trackId) updateHeroDetail(trackId);
        showToast(`Onboarding request sent for "${t.track}"`, 'accept');
    }
    hideOnboarding();
});
document.getElementById('onboardingOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) hideOnboarding();
});

// Checkbox toggle for onboarding splits
document.querySelectorAll('.ob-check').forEach(label => {
    label.addEventListener('click', (e) => {
        e.preventDefault();
        const cb = label.querySelector('.ob-checkbox');
        if (cb) cb.classList.toggle('checked');
    });
});

// Add / remove contributor rows
function updateSplitGroupState(type) {
    const group = document.querySelector(`[data-split-group="${type}"]`);
    const list = group.querySelector(`[data-contributors="${type}"]`);
    const addAnother = group.querySelector(`[data-add-type="${type}"]`);
    const count = list.querySelectorAll('.ob-contributor-row').length;

    // Toggle "has-contributors" class to hide the header button, show "add another"
    group.classList.toggle('has-contributors', count > 0);
    addAnother.style.display = count > 0 ? 'flex' : 'none';

    // Update split total
    const totalEl = document.querySelector(`[data-split-total="${type}"]`);
    if (!totalEl) return;
    let sum = 0;
    list.querySelectorAll('.ob-pct-input').forEach(input => {
        const v = parseFloat(input.value);
        if (!isNaN(v)) sum += v;
    });
    const label = type.charAt(0).toUpperCase() + type.slice(1);
    totalEl.textContent = count > 0 ? `${label} split total: ${sum}%` : `${label} split total: \u2014`;
}

function addContributorRow(type) {
    const list = document.querySelector(`[data-contributors="${type}"]`);
    const row = document.createElement('div');
    row.className = 'ob-contributor-row';
    row.innerHTML = `
        <div class="ob-field-name">
            <input type="text" class="ob-input" placeholder="Contributor name">
        </div>
        <div class="ob-field-pct">
            <input type="text" class="ob-input ob-pct-input" placeholder="e.g. 50">
        </div>
        <button class="ob-remove-btn" title="Remove contributor">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
        </button>
    `;
    list.appendChild(row);

    // Wire remove button
    row.querySelector('.ob-remove-btn').addEventListener('click', () => {
        row.remove();
        updateSplitGroupState(type);
    });

    // Wire percentage input
    row.querySelector('.ob-pct-input').addEventListener('input', () => updateSplitGroupState(type));

    // Prevent global keyboard shortcuts while typing
    row.querySelectorAll('input').forEach(input => {
        input.addEventListener('keydown', (e) => e.stopPropagation());
    });

    updateSplitGroupState(type);

    // Focus the name input of the new row
    row.querySelector('.ob-input').focus();
}

// Header "+ Add contributor" buttons
document.querySelectorAll('.ob-btn-outline[data-split-type]').forEach(btn => {
    btn.addEventListener('click', () => addContributorRow(btn.dataset.splitType));
});

// "Add another contributor" links below the list
document.querySelectorAll('.ob-add-another[data-add-type]').forEach(btn => {
    btn.addEventListener('click', () => addContributorRow(btn.dataset.addType));
});

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
    // Close onboarding modal on Escape
    if (e.key === 'Escape' && document.getElementById('onboardingOverlay').classList.contains('visible')) {
        hideOnboarding();
        return;
    }

    // Close tips overlay on Escape
    if (e.key === 'Escape' && document.getElementById('tipsOverlay').classList.contains('visible')) {
        dismissListTips();
        return;
    }

    // Ignore when confirm modal is open (except Escape and Enter)
    if (confirmOverlay.classList.contains('visible')) {
        if (e.key === 'Escape') {
            hideConfirm();
            return;
        }
        if (e.key === 'Enter') {
            e.preventDefault();
            document.getElementById('confirmAction').click();
            return;
        }
        return;
    }

    // Close assign dropdown on Escape
    if (e.key === 'Escape' && assignDropdownEl) {
        hideAssignDropdown();
        return;
    }
    // Back to artists list on Escape
    if (e.key === 'Escape' && selectedArtist !== null) {
        showArtistsList();
        return;
    }
    // Back to releases list on Escape
    if (e.key === 'Escape' && selectedRelease !== null) {
        showReleasesList();
        return;
    }
    // Close conversation thread on Escape
    if (e.key === 'Escape' && currentView === 'conversations' && activeConversationId !== null) {
        closeConversation();
        return;
    }
    // Close detail drawer on Escape
    if (e.key === 'Escape' && expandedTrackId !== null) {
        closeDetailDrawer();
        return;
    }
    // Clear bulk selection on Escape
    if (e.key === 'Escape' && bulkSelected.size > 0) {
        clearBulkSelection();
        return;
    }
    // Ignore if typing in an input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    // No track-list shortcuts when not in demos view
    if (currentView !== 'demos') return;

    const key = e.key.toLowerCase();

    if (key === 'arrowdown' || key === 'j') {
        e.preventDefault();
        setFocus(focusedIndex + 1);
    } else if (key === 'arrowup' || key === 'k') {
        e.preventDefault();
        setFocus(focusedIndex - 1);
    } else if (key === 'arrowleft') {
        e.preventDefault();
        if (audioEl.duration) audioEl.currentTime = Math.max(0, audioEl.currentTime - 15);
    } else if (key === 'arrowright') {
        e.preventDefault();
        if (audioEl.duration) audioEl.currentTime = Math.min(audioEl.duration, audioEl.currentTime + 15);
    } else if (key === ' ') {
        e.preventDefault();
        const visible = getVisibleTracks();
        const t = visible[focusedIndex];
        if (t) togglePlay(t.id);
    } else if (key === 'd') {
        e.preventDefault();
        const visible = getVisibleTracks();
        const t = visible[focusedIndex];
        if (t && (t.status === 'new' || t.status === 'shortlisted')) showConfirm('decline', t.id);
    } else if (key === 's') {
        e.preventDefault();
        const visible = getVisibleTracks();
        const t = visible[focusedIndex];
        if (t && t.status === 'new') doAction('shortlist', t.id);
    } else if (key === 'a') {
        e.preventDefault();
        const visible = getVisibleTracks();
        const t = visible[focusedIndex];
        if (t && (t.status === 'new' || t.status === 'shortlisted')) showConfirm('accept', t.id);
    } else if (key === 'r') {
        e.preventDefault();
        const visible = getVisibleTracks();
        const t = visible[focusedIndex];
        if (t) {
            if (t.status === 'declined') doReconsider(t.id);
            else if (t.status === 'shortlisted' || t.status === 'accepted') doRevert(t.id);
        }
    } else if (key === 'e') {
        e.preventDefault();
        const visible = getVisibleTracks();
        const t = visible[focusedIndex];
        if (t) toggleDetailDrawer(t.id);
    }
});

// ===== IMPRINT WORKSPACE SWITCHER =====
document.getElementById('imprintBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    document.getElementById('imprintDropdown').classList.toggle('open');
});
document.querySelectorAll('.imprint-option').forEach(opt => {
    opt.addEventListener('click', () => {
        document.querySelectorAll('.imprint-option').forEach(o => o.classList.remove('active'));
        opt.classList.add('active');
        currentImprint = opt.dataset.imprint;
        document.getElementById('imprintCurrent').textContent = opt.textContent;
        document.getElementById('imprintDropdown').classList.remove('open');

        if (currentView === 'dashboard') {
            renderDashboard();
        } else if (currentView === 'artists') {
            renderArtistsView();
        } else if (currentView === 'releases') {
            renderReleasesView();
        } else {
            focusedIndex = 0;
            renderTracks();
            updateCount();
            syncHeroToFocus();
        }
    });
});
document.addEventListener('click', () => {
    document.getElementById('imprintDropdown').classList.remove('open');
});

// ===== SORTABLE COLUMN HEADERS =====
document.querySelectorAll('.col-header[data-sort]').forEach(col => {
    col.addEventListener('click', () => {
        const sort = col.dataset.sort;
        if (currentSort === sort) {
            // Toggle direction
            sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            currentSort = sort;
            // Smart defaults: popularity desc, everything else asc
            sortDirection = sort === 'popularity' ? 'desc' : 'asc';
        }
        // Update header visuals
        document.querySelectorAll('.col-header').forEach(c => {
            c.classList.remove('sort-active', 'sort-desc');
        });
        col.classList.add('sort-active');
        if (sortDirection === 'desc') col.classList.add('sort-desc');
        focusedIndex = 0;

        renderTracks();
        syncHeroToFocus();
    });
});

// ===== STAGE PIPELINE (now in sidebar — see nav-item[data-stage] wiring above) =====

// ===== DASHBOARD FUNCTIONS =====
const imprintImageMap = {
    'all': 'label-images/enhanced-label-image.jpg',
    'colorize': 'label-images/colorize-label-image.webp',
    'enhanced-chill': 'label-images/enhanced-chill-label-image.jpg',
    'enhanced-progressive': 'label-images/enhanced-progressive-label-image.jpg',
    'enhanced-recordings': 'label-images/enhanced-recordings-label-image.webp',
    'shapes-of-solitude': 'label-images/shapes-of-solitude-label-image.jpg',
};

function computeDashboardData() {
    const filtered = currentImprint === 'all' ? tracks :
        tracks.filter(t => t.imprint.toLowerCase().replace(/\s+/g, '-') === currentImprint);

    const counts = { new: 0, shortlisted: 0, accepted: 0, declined: 0 };
    filtered.forEach(t => { if (counts[t.status] !== undefined) counts[t.status]++; });

    const pipeline = counts.new + counts.shortlisted;
    const queue = filtered.filter(t => t.status === 'new' && !t.assignedTo).length;
    const processed = counts.accepted + counts.declined;
    const rate = processed > 0 ? Math.round((counts.accepted / processed) * 100) : 0;

    // Team workload
    const teamCounts = {};
    teamMembers.forEach(m => { teamCounts[m.id] = { name: m.name, avatar: m.avatar, count: 0 }; });
    let unassigned = 0;
    filtered.forEach(t => {
        if (t.assignedTo && teamCounts[t.assignedTo.id]) {
            teamCounts[t.assignedTo.id].count++;
        } else if (!t.assignedTo) {
            unassigned++;
        }
    });

    // Per-imprint counts
    const imprintCounts = {};
    tracks.forEach(t => {
        if (!imprintCounts[t.imprint]) imprintCounts[t.imprint] = { total: 0, newCount: 0 };
        imprintCounts[t.imprint].total++;
        if (t.status === 'new') imprintCounts[t.imprint].newCount++;
    });

    // Per-genre counts
    const genreColorMap = {
        'Electronic': 'var(--lavender)', 'Indie': 'var(--gold)', 'Pop': 'var(--pink)',
        'R&B': 'var(--peach)', 'Hip-Hop': 'var(--sky)', 'Ambient': 'var(--mint)'
    };
    const genreCounts = {};
    filtered.forEach(t => {
        if (!genreCounts[t.genre]) genreCounts[t.genre] = 0;
        genreCounts[t.genre]++;
    });

    // Recent submissions (5 most recent)
    const recent = [...filtered].sort((a, b) => {
        const order = { 'Today': 0, 'Yesterday': 1 };
        const aVal = order[a.date] !== undefined ? order[a.date] : parseInt(a.date) || 99;
        const bVal = order[b.date] !== undefined ? order[b.date] : parseInt(b.date) || 99;
        return aVal - bVal;
    }).slice(0, 5);

    return { counts, pipeline, queue, rate, teamCounts, unassigned, imprintCounts, genreCounts, genreColorMap, recent };
}

let chartPipeline = null;
let chartAcceptance = null;

function renderDashboard() {
    const d = computeDashboardData();

    // Hero header — imprint logo + title
    const imprintNameMap = {
        'all': 'All Imprints', 'colorize': 'Colorize', 'enhanced-chill': 'Enhanced Chill',
        'enhanced-progressive': 'Enhanced Progressive', 'enhanced-recordings': 'Enhanced Recordings',
        'shapes-of-solitude': 'Shapes of Solitude'
    };
    document.getElementById('dashHeaderLogo').src = imprintImageMap[currentImprint] || imprintImageMap['all'];
    document.getElementById('dashHeaderTitle').textContent = imprintNameMap[currentImprint] || 'All Imprints';
    document.getElementById('dashHeaderSub').textContent = 'Enhanced Music' + (currentImprint !== 'all' ? ' \u00B7 ' + (imprintNameMap[currentImprint] || '') : '');

    // Hero number + mini stats
    document.getElementById('dashValPipeline').textContent = d.pipeline;
    document.getElementById('dashValQueue').textContent = d.queue;
    document.getElementById('dashValAccepted').textContent = d.counts.accepted;
    document.getElementById('dashValRate').textContent = d.rate + '%';

    // ---- Chart.js: Pipeline bar chart ----
    if (chartPipeline) chartPipeline.destroy();
    const ctxBar = document.getElementById('chartPipeline');
    chartPipeline = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['New', 'Shortlisted', 'Accepted', 'Declined'],
            datasets: [{
                data: [d.counts.new, d.counts.shortlisted, d.counts.accepted, d.counts.declined],
                backgroundColor: ['#7dd3fc', '#fcd34d', '#6ee7b7', '#fca5a5'],
                borderColor: ['rgba(125,211,252,0.3)', 'rgba(252,211,77,0.3)', 'rgba(110,231,183,0.3)', 'rgba(252,165,165,0.3)'],
                borderWidth: 1,
                borderRadius: 6,
                borderSkipped: false,
                barPercentage: 0.6,
                categoryPercentage: 0.7,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#1e1e2e',
                    titleColor: '#e0e0e0',
                    bodyColor: '#e0e0e0',
                    borderColor: 'rgba(255,255,255,0.08)',
                    borderWidth: 1,
                    cornerRadius: 8,
                    padding: 10,
                    callbacks: { label: (ctx) => ctx.parsed.y + ' demos' }
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { color: 'rgba(255,255,255,0.4)', font: { size: 11, family: 'Inter Tight' } },
                    border: { display: false }
                },
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(255,255,255,0.04)' },
                    ticks: { color: 'rgba(255,255,255,0.3)', font: { size: 10, family: 'Inter Tight' }, stepSize: 1, precision: 0 },
                    border: { display: false }
                }
            }
        }
    });

    // ---- Chart.js: Acceptance doughnut ----
    if (chartAcceptance) chartAcceptance.destroy();
    const ctxDoughnut = document.getElementById('chartAcceptance');
    const accepted = d.counts.accepted;
    const declined = d.counts.declined;
    const total = accepted + declined;
    // When no demos processed yet, show full gray ring
    const chartData = total > 0 ? [accepted, declined] : [0, 0, 1];
    const chartLabels = total > 0 ? ['Accepted', 'Declined'] : ['Accepted', 'Declined', 'No data'];
    const chartColors = total > 0
        ? ['#6ee7b7', '#fca5a5']
        : ['#6ee7b7', '#fca5a5', 'rgba(255,255,255,0.06)'];
    const chartBorders = total > 0
        ? ['rgba(110,231,183,0.3)', 'rgba(252,165,165,0.3)']
        : ['rgba(110,231,183,0.3)', 'rgba(252,165,165,0.3)', 'rgba(255,255,255,0.03)'];
    chartAcceptance = new Chart(ctxDoughnut, {
        type: 'doughnut',
        data: {
            labels: chartLabels,
            datasets: [{
                data: chartData,
                backgroundColor: chartColors,
                borderColor: chartBorders,
                borderWidth: 1,
                cutout: '72%',
            }]
        },
        plugins: [{
            id: 'centerText',
            afterDraw(chart) {
                const { ctx, chartArea } = chart;
                const cx = (chartArea.left + chartArea.right) / 2;
                const cy = (chartArea.top + chartArea.bottom) / 2;
                ctx.save();
                ctx.textAlign = 'center';
                ctx.fillStyle = '#e0e0e0';
                ctx.font = '600 28px "Inter Tight"';
                ctx.fillText(d.rate + '%', cx, cy + 4);
                ctx.fillStyle = 'rgba(255,255,255,0.35)';
                ctx.font = '400 10px "Inter Tight"';
                ctx.fillText('Accepted', cx, cy + 20);
                ctx.restore();
            }
        }],
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#1e1e2e',
                    titleColor: '#e0e0e0',
                    bodyColor: '#e0e0e0',
                    borderColor: 'rgba(255,255,255,0.08)',
                    borderWidth: 1,
                    cornerRadius: 8,
                    padding: 10,
                    callbacks: { label: (ctx) => ctx.label + ': ' + ctx.parsed }
                }
            }
        }
    });

    // ---- Team workload ----
    const teamEl = document.getElementById('dashTeam');
    const teamArr = Object.entries(d.teamCounts).map(([id, m]) => ({ ...m, id }));
    teamArr.push({ name: 'Unassigned', avatar: null, count: d.unassigned, id: '_unassigned' });
    const totalTeam = teamArr.reduce((s, m) => s + m.count, 0);
    const teamPillColors = {
        'user-1': { bg: 'var(--pink-glow)', text: 'var(--pink)', border: 'var(--pink-border)' },
        'user-2': { bg: 'var(--sky-glow)', text: 'var(--sky)', border: 'var(--sky-border)' },
        'user-3': { bg: 'var(--lavender-glow)', text: 'var(--lavender)', border: 'var(--lavender-border)' },
        '_unassigned': { bg: 'var(--bg-primary)', text: 'var(--text-tertiary)', border: 'var(--border)' },
    };
    teamEl.innerHTML = teamArr.map(m => {
        const pill = teamPillColors[m.id] || teamPillColors['_unassigned'];
        const pct = totalTeam > 0 ? Math.round((m.count / totalTeam) * 100) : 0;
        return `
        <div class="dash-team-row">
            ${m.avatar
                ? `<img class="dash-team-avatar" src="${m.avatar}" alt="">`
                : `<div class="dash-team-avatar-placeholder">?</div>`}
            <div class="dash-team-info">
                <div class="dash-team-name">${m.name}</div>
                <div class="dash-team-sub">${m.count} demo${m.count !== 1 ? 's' : ''} · ${pct}%</div>
            </div>
            <div class="dash-team-count-pill" style="background:${pill.bg};color:${pill.text};border:1px solid ${pill.border}">${m.count}</div>
        </div>`;
    }).join('');

    // ---- Demos by Imprint ----
    const imprintEl = document.getElementById('dashImprints');
    const imprintArr = Object.entries(d.imprintCounts);
    const imprintColors = {
        'Colorize': '#e7a2c8', 'Enhanced Chill': '#7dd3fc',
        'Enhanced Progressive': '#c4b5fd', 'Enhanced Recordings': '#6ee7b7',
        'Shapes of Solitude': '#fcd34d'
    };
    const imprintSlugMap = {
        'Colorize': 'colorize', 'Enhanced Chill': 'enhanced-chill',
        'Enhanced Progressive': 'enhanced-progressive', 'Enhanced Recordings': 'enhanced-recordings',
        'Shapes of Solitude': 'shapes-of-solitude'
    };
    const maxImprint = Math.max(...imprintArr.map(([, v]) => v.total), 1);
    imprintEl.innerHTML = imprintArr.map(([name, v]) => {
        const slug = imprintSlugMap[name] || '';
        const img = imprintImageMap[slug] || '';
        const color = imprintColors[name] || '#e7a2c8';
        return `
        <div class="dash-imprint-row">
            ${img ? `<img class="dash-imprint-logo" src="${img}" alt="">` : ''}
            <div class="dash-imprint-info">
                <div class="dash-imprint-name">${name}</div>
                <div class="dash-imprint-bar-wrap">
                    <div class="dash-imprint-bar">
                        <div class="dash-imprint-bar-fill" style="width:${(v.total / maxImprint) * 100}%;background:${color}"></div>
                    </div>
                    <div class="dash-imprint-count">${v.total}</div>
                </div>
            </div>
            ${v.newCount > 0 ? `<span class="dash-imprint-badge">${v.newCount} new</span>` : ''}
        </div>`;
    }).join('');

    // ---- Recent Submissions ----
    const recentEl = document.getElementById('dashRecentBody');
    if (d.recent.length === 0) {
        recentEl.innerHTML = '<div class="dash-empty">No submissions yet.</div>';
    } else {
        recentEl.innerHTML = d.recent.map(t => `
            <div class="dash-recent-row" data-goto-track="${t.id}">
                <div class="dash-recent-artwork"><img src="${t.artwork || t.avatar}" alt=""></div>
                <div class="dash-recent-track-info">
                    <div class="dash-recent-track">${t.track}</div>
                    <div class="dash-recent-artist">${t.artist}</div>
                </div>
                <div class="dash-recent-genre"><span class="genre-tag ${t.genreClass}">${t.genre}</span></div>
                <span class="dash-status-badge ${t.status}">${t.status.charAt(0).toUpperCase() + t.status.slice(1)}</span>
                <div class="dash-recent-date">${t.date}</div>
            </div>
        `).join('');
    }

    // Wire click handlers
    document.querySelectorAll('[data-goto]').forEach(btn => {
        btn.onclick = () => switchView('demos', 'new');
    });
    document.querySelectorAll('[data-goto-track]').forEach(row => {
        row.onclick = () => {
            const trackId = parseInt(row.dataset.gotoTrack);
            switchView('demos', 'new');
            const visible = getVisibleTracks();
            const idx = visible.findIndex(t => t.id === trackId);
            if (idx >= 0) {
                focusedIndex = idx;
                renderTracks();
                syncHeroToFocus();
            }
        };
    });
}

// ===== VIEW SWITCHING =====
function switchView(view, stage) {
    currentView = view;

    // Close detail drawer when switching views
    if (expandedTrackId !== null) closeDetailDrawer();

    // Update nav active states — clear all first
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById('navSubmissions')?.classList.remove('child-active');

    const dashEl = document.getElementById('dashboardView');
    const listEl = document.getElementById('listView');
    const artistsEl = document.getElementById('artistsView');
    const convEl = document.getElementById('conversationsView');
    const releasesEl = document.getElementById('releasesView');
    const scopeToggle = document.getElementById('scopeToggle');

    // Show scope toggle only on demos view
    if (scopeToggle) scopeToggle.style.display = view === 'demos' ? '' : 'none';

    if (view === 'dashboard') {
        document.querySelector('.nav-item[data-view="dashboard"]')?.classList.add('active');
        dashEl.classList.add('active');
        listEl.classList.remove('active');
        artistsEl.classList.remove('active');
        convEl?.classList.remove('active');
        releasesEl?.classList.remove('active');
        document.querySelector('.page-title').textContent = 'Dashboard';
        renderDashboard();
    } else if (view === 'demos') {
        // Set pipeline stage if provided, otherwise keep current
        if (stage) currentFilter = stage;
        // Highlight the matching stage child nav item + parent
        document.querySelector(`.nav-item-child[data-stage="${currentFilter}"]`)?.classList.add('active');
        document.getElementById('navSubmissions')?.classList.add('child-active');
        // Auto-expand if collapsed
        if (submissionsCollapsed) {
            submissionsCollapsed = false;
            document.getElementById('navSubmissionsChildren')?.classList.remove('collapsed');
            document.getElementById('navSubmissions')?.classList.remove('collapsed');
        }

        dashEl.classList.remove('active');
        listEl.classList.add('active');
        artistsEl.classList.remove('active');
        convEl?.classList.remove('active');
        releasesEl?.classList.remove('active');

        // Page title matches current stage
        const stageTitles = { new: 'New', shortlisted: 'Shortlisted', accepted: 'Accepted', declined: 'Declined' };
        document.querySelector('.page-title').textContent = stageTitles[currentFilter] || 'Demos';

        focusedIndex = 0;
        clearBulkSelection();
        updateEmptyText();
        renderTracks();
        updateCount();
        syncHeroToFocus();

        // Show first-time tips
        if (!hasSeenListTips) {
            setTimeout(() => showListTips(), 400);
        }
    } else if (view === 'releases') {
        document.querySelector('.nav-item[data-view="releases"]')?.classList.add('active');
        dashEl.classList.remove('active');
        listEl.classList.remove('active');
        artistsEl.classList.remove('active');
        convEl?.classList.remove('active');
        releasesEl?.classList.add('active');
        document.querySelector('.page-title').textContent = 'Releases';
        if (selectedRelease) showReleasesList();
        else renderReleasesView();
    } else if (view === 'artists') {
        document.querySelector('.nav-item[data-view="artists"]')?.classList.add('active');
        dashEl.classList.remove('active');
        listEl.classList.remove('active');
        artistsEl.classList.add('active');
        convEl?.classList.remove('active');
        releasesEl?.classList.remove('active');
        document.querySelector('.page-title').textContent = 'Artists';
        // Reset to list if detail was open
        if (selectedArtist) showArtistsList();
        else renderArtistsView();
    } else if (view === 'conversations') {
        document.querySelector('.nav-item[data-view="conversations"]')?.classList.add('active');
        dashEl.classList.remove('active');
        listEl.classList.remove('active');
        artistsEl.classList.remove('active');
        convEl?.classList.add('active');
        releasesEl?.classList.remove('active');
        document.querySelector('.page-title').textContent = 'Messages';
        renderConversationsList();
        updateConversationBadges();
    }
}

// Wire nav items with data-view (Dashboard, Artists, Messages)
document.querySelectorAll('.nav-item[data-view]').forEach(item => {
    item.addEventListener('click', () => switchView(item.dataset.view));
});

// Wire Submissions parent click (chevron toggles collapse, body navigates to New)
document.getElementById('navSubmissions')?.addEventListener('click', (e) => {
    if (e.target.closest('.nav-expand-arrow')) {
        submissionsCollapsed = !submissionsCollapsed;
        document.getElementById('navSubmissionsChildren')?.classList.toggle('collapsed', submissionsCollapsed);
        document.getElementById('navSubmissions')?.classList.toggle('collapsed', submissionsCollapsed);
        return;
    }
    switchView('demos', 'new');
});

// Wire nav child items with data-stage (New, Shortlisted, Accepted, Declined)
document.querySelectorAll('.nav-item-child[data-stage]').forEach(item => {
    item.addEventListener('click', () => switchView('demos', item.dataset.stage));
});

// Wire scope toggle buttons
document.querySelectorAll('#scopeToggle .scope-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('#scopeToggle .scope-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentScope = btn.dataset.scope;
        focusedIndex = 0;
        updateEmptyText();
        renderTracks();
        updateCount();
        syncHeroToFocus();
    });
});

// Wire "View all" link in recent submissions
document.querySelectorAll('[data-goto]').forEach(btn => {
    btn.onclick = () => switchView('demos', 'new');
});

// Wire share submission link button
document.querySelector('.share-link-btn')?.addEventListener('click', () => {
    navigator.clipboard.writeText('https://demmo.link/submit/enhanced-music');
    showToast('Submission link copied to clipboard');
});

// ===== NOW-PLAYING BAR CONTROLS =====
document.getElementById('npPlayPause').addEventListener('click', () => {
    const visible = getVisibleTracks();
    const targetId = playingId !== null ? playingId : (visible.length > 0 ? visible[focusedIndex]?.id : null);
    if (targetId !== null) togglePlay(targetId);
});

document.getElementById('npPrev').addEventListener('click', playPrev);
document.getElementById('npNext').addEventListener('click', playNext);

// Shortcuts popup toggle
document.getElementById('npShortcutsBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    document.getElementById('npShortcutsPopup').classList.toggle('visible');
});
document.addEventListener('click', (e) => {
    const popup = document.getElementById('npShortcutsPopup');
    if (popup.classList.contains('visible') && !e.target.closest('.np-right')) {
        popup.classList.remove('visible');
    }
});

// Seek on progress bar click (bottom bar + hero)
document.getElementById('progressTrack').addEventListener('click', (e) => {
    if (!audioEl.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audioEl.currentTime = pct * audioEl.duration;
});
document.getElementById('npHeroWaveform').addEventListener('click', (e) => {
    if (heroTrackId === playingId && audioEl.duration) {
        // Same track playing — seek
        const rect = e.currentTarget.getBoundingClientRect();
        const pct = (e.clientX - rect.left) / rect.width;
        audioEl.currentTime = pct * audioEl.duration;
    } else if (heroTrackId) {
        // Different track — start playing it
        togglePlay(heroTrackId);
    }
});

// Volume slider
document.getElementById('volumeTrack').addEventListener('click', (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audioEl.volume = pct;
    document.getElementById('volumeFill').style.width = (pct * 100) + '%';
});

// Update NP bar play/pause icon state
function updateNPIcons() {
    const ppBtn = document.getElementById('npPlayPause');
    const playIcon = ppBtn.querySelector('.play-icon');
    const pauseIcon = ppBtn.querySelector('.pause-icon');
    if (playingId !== null && !audioEl.paused) {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    } else {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    }
    // Sync hero play/pause button
    updateHeroPlayBtn();
}

function updateHeroPlayBtn() {
    const heroPlayBtn = document.getElementById('heroDetailPlayBtn');
    if (!heroPlayBtn) return;
    const isPlaying = heroTrackId !== null && heroTrackId === playingId && !audioEl.paused;
    heroPlayBtn.classList.toggle('is-playing', isPlaying);
}

// Update bottom bar state
function updateNPActions() {
    updateHeroVisibility();
}

// Patch renderTracks to also update NP icons + action strip
const _origRender = renderTracks;
renderTracks = function() {
    _origRender();
    updateNPIcons();
    updateNPActions();
};

// ===== HERO BUTTON HANDLERS =====
// Idle play button — start playing first visible track
// Hero detail play/pause button — toggles the hero track
document.getElementById('heroDetailPlayBtn').addEventListener('click', () => {
    if (heroTrackId) togglePlay(heroTrackId);
});

// ===== ARTISTS VIEW =====
const imprintNameMap = {
    'all': 'All Labels',
    'colorize': 'Colorize',
    'enhanced-chill': 'Enhanced Chill',
    'enhanced-progressive': 'Enhanced Progressive',
    'enhanced-recordings': 'Enhanced Recordings',
    'shapes-of-solitude': 'Shapes of Solitude',
};

function aggregateArtists() {
    const map = new Map();
    tracks.forEach(t => {
        if (!map.has(t.artist)) {
            map.set(t.artist, {
                name: t.artist,
                avatar: t.avatar,
                genre: t.genre,
                genreClass: t.genreClass,
                socials: t.socials,
                followers: t.followers,
                submissions: t.submissions,
                accepted: t.accepted,
                firstSub: t.firstSub,
                lastSub: t.lastSub,
                imprints: new Set(),
                trackId: t.id,
            });
        }
        const a = map.get(t.artist);
        a.imprints.add(t.imprint.toLowerCase().replace(/\s+/g, '-'));
    });
    return Array.from(map.values());
}

function getFilteredArtists() {
    let artists = aggregateArtists();

    // Filter by imprint
    if (currentImprint !== 'all') {
        artists = artists.filter(a => a.imprints.has(currentImprint));
    }

    // Filter by search
    const q = document.getElementById('artistsSearch')?.value.toLowerCase().trim() || '';
    if (q) {
        artists = artists.filter(a =>
            a.name.toLowerCase().includes(q) ||
            a.genre.toLowerCase().includes(q)
        );
    }

    // Sort
    const dir = artistsSortDirection === 'asc' ? 1 : -1;
    switch (artistsSort) {
        case 'artist':
            artists.sort((a, b) => dir * a.name.localeCompare(b.name));
            break;
        case 'genre':
            artists.sort((a, b) => dir * a.genre.localeCompare(b.genre));
            break;
        case 'submissions':
            artists.sort((a, b) => dir * (a.submissions - b.submissions));
            break;
        case 'acceptance':
            artists.sort((a, b) => {
                const rA = a.submissions > 0 ? a.accepted / a.submissions : 0;
                const rB = b.submissions > 0 ? b.accepted / b.submissions : 0;
                return dir * (rA - rB);
            });
            break;
        case 'lastSub':
            artists.sort((a, b) => dir * a.lastSub.localeCompare(b.lastSub));
            break;
    }

    return artists;
}

function renderArtistsView() {
    const allArtists = aggregateArtists();
    const filtered = getFilteredArtists();

    // Stats (from all artists, not filtered)
    const totalSubs = allArtists.reduce((s, a) => s + a.submissions, 0);
    const totalAccepted = allArtists.reduce((s, a) => s + a.accepted, 0);
    const avgRate = totalSubs > 0 ? Math.round((totalAccepted / totalSubs) * 100) : 0;

    document.getElementById('artistsTotal').textContent = allArtists.length;
    document.getElementById('artistsSubmissions').textContent = totalSubs;
    document.getElementById('artistsAccepted').textContent = totalAccepted;
    document.getElementById('artistsAcceptanceRate').textContent = avgRate + '%';

    // Subtitle
    const label = imprintNameMap[currentImprint] || 'your labels';
    document.getElementById('artistsSubtitle').textContent =
        `${allArtists.length} artist${allArtists.length !== 1 ? 's' : ''} who have submitted to ${currentImprint === 'all' ? 'your labels' : label}`;

    // Imprint filter button text
    document.getElementById('artistsImprintText').textContent =
        imprintNameMap[currentImprint] || 'All Labels';

    // Table body
    const body = document.getElementById('artistsTableBody');
    const empty = document.getElementById('artistsEmpty');

    if (filtered.length === 0) {
        body.innerHTML = '';
        empty.style.display = 'flex';
        return;
    }

    empty.style.display = 'none';

    body.innerHTML = filtered.map(a => {
        const rate = a.submissions > 0 ? Math.round((a.accepted / a.submissions) * 100) : 0;
        return `
        <div class="artists-row" data-artist-id="${a.trackId}">
            <div class="artists-cell-artist">
                <img class="artists-avatar" src="${a.avatar}" alt="">
                <div class="artists-name">${a.name}</div>
            </div>
            <div class="artists-cell-genre">
                <span class="genre-tag ${a.genreClass}">${a.genre}</span>
            </div>
            <div class="artists-cell-submissions">${a.submissions}</div>
            <div class="artists-cell-acceptance">
                <div class="artists-acceptance-pct">${rate}%</div>
            </div>
            <div class="artists-cell-date">${a.lastSub}</div>
        </div>`;
    }).join('');

    // Wire row clicks → open artist detail view
    body.querySelectorAll('.artists-row').forEach(row => {
        row.addEventListener('click', () => {
            const trackId = parseInt(row.dataset.artistId);
            const t = tracks.find(tr => tr.id === trackId);
            if (t) {
                selectedArtist = t.artist;
                renderArtistDetail(t.artist);
            }
        });
    });
}

// ===== ARTIST DETAIL VIEW =====
function hashStr(s) {
    let h = 0;
    for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
    return Math.abs(h);
}

function getArtistMockData(artistName, genre, followers) {
    const h = hashStr(artistName);
    const locations = ['Los Angeles, CA', 'Brooklyn, NY', 'London, UK', 'Berlin, Germany', 'Stockholm, Sweden', 'Amsterdam, Netherlands', 'Melbourne, Australia'];
    const publishers = ['Independent', 'Kobalt Music Publishing', 'TuneCore Publishing', 'Ditto Music Publishing', 'AWAL'];
    const loc = locations[h % locations.length];
    const pub = publishers[h % publishers.length];
    const slug = artistName.toLowerCase().replace(/[^a-z0-9]/g, '');

    return {
        location: loc,
        email: slug + '@email.com',
        bio: `${artistName} is a ${genre.toLowerCase()} artist known for atmospheric production and genre-bending sound design. With a growing discography and dedicated following, they continue to push creative boundaries and deliver emotionally resonant music.`,
        fullName: artistName,
        stageName: artistName,
        address: (100 + (h % 900)) + ' Music Lane, ' + loc,
        phone: '+1 (555) ' + String(100 + (h % 900)) + '-' + String(1000 + (h % 9000)),
        ipiNumber: String(100000000 + (h % 900000000)),
        publisher: pub,
        publisherContact: pub === 'Independent' ? 'N/A' : 'contact@' + pub.toLowerCase().replace(/\s+/g, '') + '.com',
        avgResponseTime: (2 + (h % 5)) + 'd',
        socialFollowers: {
            spotify: Math.floor(followers * 0.45),
            instagram: Math.floor(followers * 0.30),
            youtube: Math.floor(followers * 0.15),
            soundcloud: Math.floor(followers * 0.10),
        }
    };
}

const socialSVGs = {
    spotify: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
    soundcloud: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.175 12.225c-.017 0-.034.002-.05.005A.5.5 0 001 12.7v3.6c0 .276.225.5.5.5h.027c.276 0 .473-.224.473-.5V12.7a.5.5 0 00-.5-.5h-.325zm2.05-.8c-.017 0-.034.002-.05.005a.5.5 0 00-.45.495v4.8c0 .276.225.5.5.5h.027c.276 0 .473-.224.473-.5v-4.8a.5.5 0 00-.5-.5zm2.05.4c-.017 0-.034.002-.05.005a.5.5 0 00-.45.495v4.4c0 .276.225.5.5.5h.027c.276 0 .473-.224.473-.5v-4.4a.5.5 0 00-.5-.5zm2.05-1.2c-.017 0-.034.002-.05.005a.5.5 0 00-.45.495v5.6c0 .276.225.5.5.5h.027c.276 0 .473-.224.473-.5v-5.6a.5.5 0 00-.5-.5zm2.05-.8c-.017 0-.034.002-.05.005a.5.5 0 00-.45.495v6.4c0 .276.225.5.5.5h.027c.276 0 .473-.224.473-.5v-6.4a.5.5 0 00-.5-.5zm1.8-.6a4.5 4.5 0 00-1.5.256V17.3c0 .276.224.5.5.5h7.375A3.375 3.375 0 0020.5 14.5a3.375 3.375 0 00-3.375-3.375c-.08 0-.16.003-.238.008A4.5 4.5 0 0011.175 9.225z"/></svg>'
};

function renderArtistDetail(artistName) {
    const artistTracks = tracks.filter(t => t.artist === artistName);
    if (artistTracks.length === 0) return;

    const t = artistTracks[0]; // primary track for metadata
    const mock = getArtistMockData(artistName, t.genre, t.followers);

    // Header
    document.getElementById('adAvatar').src = t.avatar;
    document.getElementById('adName').textContent = artistName;
    document.getElementById('adLocation').textContent = mock.location;
    document.getElementById('adEmail').textContent = mock.email;

    // Socials
    const platforms = [
        { key: 'spotify', label: 'Spotify Followers' },
        { key: 'instagram', label: 'Instagram' },
        { key: 'youtube', label: 'YouTube Subscribers' },
        { key: 'soundcloud', label: 'SoundCloud' },
    ];
    document.getElementById('adSocials').innerHTML = platforms.map(p => `
        <a href="${t.socials[p.key]}" target="_blank" rel="noopener" class="ad-social-card">
            <div class="ad-social-icon social-${p.key}">${socialSVGs[p.key]}</div>
            <div class="ad-social-info">
                <div class="ad-social-platform">${p.label}</div>
                <div class="ad-social-count">${formatFollowers(mock.socialFollowers[p.key])}</div>
            </div>
        </a>
    `).join('');

    // Bio
    document.getElementById('adBio').textContent = mock.bio;

    // Stats
    document.getElementById('adStatSubs').textContent = t.submissions;

    // Popularity score: 1-10 scale based on followers
    const maxFollowers = Math.max(...tracks.map(tr => tr.followers));
    const popScore = Math.max(1, Math.round((t.followers / maxFollowers) * 10));
    document.getElementById('adStatPop').textContent = popScore;
    document.getElementById('adStatFollowers').textContent = formatFollowers(t.followers) + ' followers';

    const rate = t.submissions > 0 ? Math.round((t.accepted / t.submissions) * 100) : 0;
    document.getElementById('adStatRate').textContent = rate + '%';
    document.getElementById('adStatTime').textContent = mock.avgResponseTime;

    // Onboarding details
    document.getElementById('adFullName').textContent = mock.fullName;
    document.getElementById('adStageName').textContent = mock.stageName;
    document.getElementById('adAddress').textContent = mock.address;
    document.getElementById('adPhone').textContent = mock.phone;
    document.getElementById('adIPI').textContent = mock.ipiNumber;
    document.getElementById('adPublisher').textContent = mock.publisher;
    document.getElementById('adPubContact').textContent = mock.publisherContact;

    // Submission history
    document.getElementById('adSubsBody').innerHTML = artistTracks.map(tr => `
        <div class="ad-sub-row">
            <button class="ad-play-btn${playingId === tr.id ? ' playing' : ''}" data-track-id="${tr.id}" title="Play">
                <svg viewBox="0 0 24 24">${playingId === tr.id ? '<rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/>' : '<path d="M8 5v14l11-7z"/>'}</svg>
            </button>
            <div class="ad-sub-track">${tr.track}</div>
            <div class="ad-sub-label">${tr.imprint}</div>
            <div class="ad-sub-genre"><span class="genre-tag ${tr.genreClass}">${tr.genre}</span></div>
            <div class="ad-sub-date">${tr.date}</div>
            <div><span class="ad-status ad-status-${tr.status}">${tr.status}</span></div>
        </div>
    `).join('');

    // Wire play buttons
    document.querySelectorAll('#adSubsBody .ad-play-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            togglePlay(parseInt(btn.dataset.trackId));
        });
    });

    // Show detail, hide list
    document.querySelector('#artistsView .artists-scroll').style.display = 'none';
    document.getElementById('artistDetailView').classList.add('active');
}

function showArtistsList() {
    selectedArtist = null;
    document.getElementById('artistDetailView').classList.remove('active');
    document.querySelector('#artistsView .artists-scroll').style.display = '';
}

// Back button
document.getElementById('artistBackBtn').addEventListener('click', showArtistsList);

// Artists table sort
document.querySelectorAll('[data-artist-sort]').forEach(header => {
    header.addEventListener('click', () => {
        const field = header.dataset.artistSort;
        if (artistsSort === field) {
            artistsSortDirection = artistsSortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            artistsSort = field;
            artistsSortDirection = 'asc';
        }
        // Update active header UI
        document.querySelectorAll('[data-artist-sort]').forEach(h => {
            h.classList.remove('sort-active', 'sort-desc');
        });
        header.classList.add('sort-active');
        if (artistsSortDirection === 'desc') header.classList.add('sort-desc');
        renderArtistsView();
    });
});

// Artists search
document.getElementById('artistsSearch')?.addEventListener('input', () => {
    if (currentView === 'artists') renderArtistsView();
});

// Artists search — prevent keyboard shortcuts while typing
document.getElementById('artistsSearch')?.addEventListener('keydown', (e) => e.stopPropagation());

// Artists imprint filter — sync with sidebar imprint selector
document.getElementById('artistsImprintFilter')?.addEventListener('click', () => {
    // Toggle the existing sidebar imprint dropdown
    document.getElementById('imprintBtn').click();
});

// ===== LIST TIPS (first-time help popup) =====
function showListTips() {
    document.getElementById('tipsOverlay').classList.add('visible');
}

function dismissListTips() {
    const overlay = document.getElementById('tipsOverlay');
    overlay.classList.remove('visible');
    if (document.getElementById('tipsDontShow').checked) {
        localStorage.setItem('demmo_list_tips_seen', 'true');
        hasSeenListTips = true;
    }
}

// Detail drawer close button
document.getElementById('dpClose').addEventListener('click', closeDetailDrawer);

document.getElementById('tipsClose').addEventListener('click', dismissListTips);
document.getElementById('tipsGotIt').addEventListener('click', dismissListTips);
document.getElementById('tipsOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) dismissListTips();
});

// ===== CONVERSATIONS VIEW =====
function getTotalUnreadCount() {
    return conversations.reduce((s, c) => s + c.unreadCount, 0);
}

function updateConversationBadges() {
    const badge = document.getElementById('navCountConversations');
    if (badge) {
        const total = getTotalUnreadCount();
        badge.textContent = total > 0 ? total : '';
    }
}

function formatConvTime(date) {
    const now = new Date();
    const diff = now - date;
    const mins = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    if (mins < 1) return 'now';
    if (mins < 60) return mins + 'm';
    if (hours < 24) return hours + 'h';
    if (days === 1) return 'Yesterday';
    if (days < 7) return days + 'd';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function formatConvTimeRelative(date) {
    const now = new Date();
    const diff = now - date;
    const mins = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    if (mins < 1) return 'just now';
    if (mins < 60) return mins + ' min' + (mins !== 1 ? 's' : '') + ' ago';
    if (hours < 24) return hours + ' hour' + (hours !== 1 ? 's' : '') + ' ago';
    if (days === 1) return 'yesterday';
    return days + ' day' + (days !== 1 ? 's' : '') + ' ago';
}

function escapeConvHtml(text) {
    const d = document.createElement('div');
    d.textContent = text;
    return d.innerHTML;
}

function renderConversationsList() {
    const listScroll = document.getElementById('convListScroll');
    const listEmpty = document.getElementById('convListEmpty');

    // Filter: show conversations with messages, or the active one even if empty
    let filtered = conversations.filter(c => c.messages.length > 0 || c.id === activeConversationId);

    if (conversationFilter !== 'all') {
        filtered = filtered.filter(c => {
            const t = tracks.find(tr => tr.id === c.trackId);
            return t && t.artist === conversationFilter;
        });
    }

    // Sort newest activity first
    filtered.sort((a, b) => b.lastActivity - a.lastActivity);

    if (filtered.length === 0) {
        listScroll.innerHTML = '';
        listEmpty.style.display = 'flex';
        return;
    }
    listEmpty.style.display = 'none';

    listScroll.innerHTML = filtered.map(conv => {
        const t = tracks.find(tr => tr.id === conv.trackId);
        if (!t) return '';
        const lastMsg = conv.messages[conv.messages.length - 1];
        const preview = lastMsg
            ? (lastMsg.sender === 'label_team' ? 'You: ' : '') + lastMsg.text
            : 'No messages yet';
        const timeStr = lastMsg ? formatConvTime(lastMsg.timestamp) : '';
        const isActive = conv.id === activeConversationId;
        const hasUnread = conv.unreadCount > 0;

        return `
        <div class="conv-row${isActive ? ' active' : ''}" data-conv-id="${conv.id}">
            <div class="conv-row-avatar"><img src="${t.avatar}" alt=""></div>
            <div class="conv-row-content">
                <div class="conv-row-top">
                    <div class="conv-row-track">${escapeConvHtml(t.artist)} · ${escapeConvHtml(t.track)}</div>
                    <div class="conv-row-time">${timeStr}</div>
                </div>
                <div class="conv-row-sub">Label: ${escapeConvHtml(t.imprint)}</div>
                <div class="conv-row-preview${hasUnread ? ' unread' : ''}">${escapeConvHtml(preview)}</div>
            </div>
            ${hasUnread ? '<div class="conv-row-unread-dot"></div>' : ''}
        </div>`;
    }).join('');

    // Wire clicks
    listScroll.querySelectorAll('.conv-row').forEach(row => {
        row.addEventListener('click', () => openConversation(row.dataset.convId));
    });
}

function openConversation(convId) {
    const conv = conversations.find(c => c.id === convId);
    if (!conv) return;
    activeConversationId = convId;
    const t = tracks.find(tr => tr.id === conv.trackId);
    if (!t) return;

    // Mark as read
    conv.messages.forEach(m => { m.read = true; });
    conv.unreadCount = 0;
    updateConversationBadges();

    // Populate header
    document.getElementById('convThreadAvatar').src = t.avatar;
    document.getElementById('convThreadArtist').textContent = t.artist + ' \u00B7 ' + t.track;
    document.getElementById('convThreadTrack').textContent = t.imprint;
    document.getElementById('convThreadMeta').textContent =
        'Updated ' + formatConvTimeRelative(conv.lastActivity);

    // Show thread, hide empty
    document.getElementById('convThreadEmpty').style.display = 'none';
    document.getElementById('convThreadActive').classList.add('visible');

    renderMessages(conv);
    renderConversationsList();

    // Auto-focus input
    setTimeout(() => { document.getElementById('convInputTextarea')?.focus(); }, 100);
}

function renderMessages(conv) {
    const list = document.getElementById('convMessagesList');
    const scroll = document.getElementById('convMessagesScroll');
    const noMsg = document.getElementById('convNoMessages');

    const t = tracks.find(tr => tr.id === conv.trackId);

    if (conv.messages.length === 0) {
        let introHtml = '';
        if (t) {
            introHtml = `
            <div class="conv-intro-card">
                <img class="conv-intro-artwork" src="${t.artwork}" alt="">
                <div class="conv-intro-track">${escapeConvHtml(t.track)}</div>
                <div class="conv-intro-artist">${escapeConvHtml(t.artist)} · ${escapeConvHtml(t.genre)}</div>
                <div class="conv-intro-started">Start of conversation</div>
            </div>`;
        }
        list.innerHTML = introHtml;
        scroll.style.display = '';
        noMsg.classList.remove('visible');
        return;
    }
    noMsg.classList.remove('visible');
    scroll.style.display = '';
    let html = '';
    if (t) {
        const firstMsg = conv.messages[0];
        const startDate = firstMsg ? firstMsg.timestamp.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : '';
        html += `
        <div class="conv-intro-card">
            <img class="conv-intro-artwork" src="${t.artwork}" alt="">
            <div class="conv-intro-track">${escapeConvHtml(t.track)}</div>
            <div class="conv-intro-artist">${escapeConvHtml(t.artist)} · ${escapeConvHtml(t.genre)}</div>
            <div class="conv-intro-started">${startDate ? 'Conversation started ' + startDate : 'Start of conversation'}</div>
        </div>`;
    }

    let lastDate = null;
    const dateOpts = { weekday: 'long', month: 'short', day: 'numeric' };

    conv.messages.forEach((msg, idx) => {
        const msgDate = msg.timestamp.toLocaleDateString('en-US', dateOpts);

        let dateChanged = false;
        if (msgDate !== lastDate) {
            html += `<div class="conv-date-sep"><span>${msgDate}</span></div>`;
            lastDate = msgDate;
            dateChanged = true;
        }

        const isSent = msg.sender === 'label_team';
        const prev = idx > 0 ? conv.messages[idx - 1] : null;
        const next = idx < conv.messages.length - 1 ? conv.messages[idx + 1] : null;

        // WhatsApp-style grouping: same sender, no date boundary
        const isFirstInGroup = !prev || prev.sender !== msg.sender || dateChanged;
        const nextDate = next ? next.timestamp.toLocaleDateString('en-US', dateOpts) : null;
        const nextDateChanges = next && nextDate !== msgDate;
        const isLastInGroup = !next || next.sender !== msg.sender || nextDateChanges;

        const timeStr = msg.timestamp.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

        // Build CSS classes
        const cls = ['conv-message', isSent ? 'sent' : 'received'];
        if (!isFirstInGroup) cls.push('grouped');
        if (isLastInGroup) cls.push('group-end');

        // Read receipt (only on the very last sent message overall)
        let readReceipt = '';
        if (isSent && idx === conv.messages.length - 1) {
            readReceipt = `
                <div class="conv-msg-read${msg.read ? ' is-read' : ''}">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                    ${msg.read ? 'Read' : 'Sent'}
                </div>`;
        }

        const avatarSrc = isSent ? currentUser.avatar : (t ? t.avatar : '');

        html += `
        <div class="${cls.join(' ')}">
            ${avatarSrc
                ? `<img class="conv-msg-avatar" src="${avatarSrc}"${!isLastInGroup ? ' style="visibility:hidden"' : ''} alt="">`
                : `<div class="conv-msg-avatar"${!isLastInGroup ? ' style="visibility:hidden"' : ''}>${msg.senderInitials}</div>`
            }
            <div class="conv-msg-body">
                ${isFirstInGroup ? `<div class="conv-msg-sender">${escapeConvHtml(msg.senderName)}</div>` : ''}
                <div class="conv-msg-bubble">${escapeConvHtml(msg.text)}</div>
                ${isLastInGroup ? `<div class="conv-msg-time">${timeStr}</div>` : ''}
                ${readReceipt}
            </div>
        </div>`;
    });

    list.innerHTML = html;

    // Auto-scroll to bottom
    requestAnimationFrame(() => { scroll.scrollTop = scroll.scrollHeight; });
}

function sendMessage() {
    const textarea = document.getElementById('convInputTextarea');
    const text = textarea.value.trim();
    if (!text || !activeConversationId) return;

    const conv = conversations.find(c => c.id === activeConversationId);
    if (!conv) return;

    conv.messages.push({
        id: 'msg-' + Date.now(),
        sender: 'label_team',
        senderName: currentUser.name,
        senderInitials: currentUser.initials,
        text: text,
        timestamp: new Date(),
        read: false
    });
    conv.lastActivity = new Date();

    // Clear input
    textarea.value = '';
    textarea.style.height = 'auto';
    document.getElementById('convSendBtn').disabled = true;

    // Re-render
    renderMessages(conv);
    renderConversationsList();

    // Update header time
    const t = tracks.find(tr => tr.id === conv.trackId);
    document.getElementById('convThreadMeta').textContent =
        'Updated just now';

    showToast('Message sent', 'accept');

    // Simulate artist reply
    simulateArtistReply(conv);
}

function simulateArtistReply(conv) {
    const t = tracks.find(tr => tr.id === conv.trackId);
    if (!t) return;

    const replies = [
        'Thanks for reaching out! I\'ll get back to you shortly.',
        'That sounds great, looking forward to working together!',
        'Appreciate the feedback! Let me know if you need anything else.',
        'Awesome, I\'ll send those over as soon as possible.',
        'Thanks! Really excited about this opportunity.',
    ];

    // Show typing after 1.5s
    setTimeout(() => {
        if (activeConversationId !== conv.id) return;
        document.getElementById('convTypingIndicator').classList.add('visible');
        const scroll = document.getElementById('convMessagesScroll');
        scroll.scrollTop = scroll.scrollHeight;
    }, 1500);

    // Add reply after 3.5s
    setTimeout(() => {
        document.getElementById('convTypingIndicator').classList.remove('visible');

        const initials = t.artist.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase();
        conv.messages.push({
            id: 'msg-' + Date.now(),
            sender: 'artist',
            senderName: t.artist,
            senderInitials: initials,
            text: replies[Math.floor(Math.random() * replies.length)],
            timestamp: new Date(),
            read: true
        });
        conv.lastActivity = new Date();

        if (activeConversationId === conv.id) {
            renderMessages(conv);
        } else {
            conv.unreadCount++;
            updateConversationBadges();
        }
        renderConversationsList();
    }, 3500);
}

function closeConversation() {
    activeConversationId = null;
    document.getElementById('convThreadActive').classList.remove('visible');
    document.getElementById('convThreadEmpty').style.display = '';
    document.getElementById('convTypingIndicator').classList.remove('visible');
    renderConversationsList();
}

// --- Conversations filter dropdown ---
function renderConvFilterDropdown() {
    const dd = document.getElementById('convFilterDropdown');
    const artists = [...new Set(conversations.map(c => {
        const t = tracks.find(tr => tr.id === c.trackId);
        return t ? t.artist : null;
    }).filter(Boolean))].sort();

    dd.innerHTML = `
        <div class="conv-filter-option${conversationFilter === 'all' ? ' active' : ''}" data-filter="all">All Artists</div>
        ${artists.map(a => `<div class="conv-filter-option${conversationFilter === a ? ' active' : ''}" data-filter="${escapeConvHtml(a)}">${escapeConvHtml(a)}</div>`).join('')}
    `;

    dd.querySelectorAll('.conv-filter-option').forEach(opt => {
        opt.addEventListener('click', () => {
            conversationFilter = opt.dataset.filter;
            document.getElementById('convFilterText').textContent =
                conversationFilter === 'all' ? 'All Artists' : conversationFilter;
            dd.classList.remove('open');
            renderConversationsList();
        });
    });
}

document.getElementById('convFilterBtn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    const dd = document.getElementById('convFilterDropdown');
    dd.classList.toggle('open');
    if (dd.classList.contains('open')) renderConvFilterDropdown();
});

// --- Conversations event wiring ---
document.getElementById('convCloseBtn')?.addEventListener('click', closeConversation);
document.getElementById('convSendBtn')?.addEventListener('click', sendMessage);

const convTextarea = document.getElementById('convInputTextarea');
if (convTextarea) {
    convTextarea.addEventListener('input', () => {
        document.getElementById('convSendBtn').disabled = !convTextarea.value.trim();
        convTextarea.style.height = 'auto';
        convTextarea.style.height = Math.min(convTextarea.scrollHeight, 120) + 'px';
    });
    convTextarea.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (convTextarea.value.trim()) sendMessage();
        }
        e.stopPropagation();
    });
}

// Close filter dropdown on outside click
document.addEventListener('click', (e) => {
    const dd = document.getElementById('convFilterDropdown');
    const btn = document.getElementById('convFilterBtn');
    if (dd && !dd.contains(e.target) && !btn?.contains(e.target)) {
        dd.classList.remove('open');
    }
});

// ===== RELEASES VIEW =====
function getFilteredReleases() {
    let filtered = [...releases];

    // Filter by imprint
    if (currentImprint !== 'all') {
        filtered = filtered.filter(r => r.imprintSlug === currentImprint);
    }

    // Filter by status
    if (releasesStatusFilter === 'active') {
        filtered = filtered.filter(r => r.status !== 'archived' && r.status !== 'draft');
    } else if (releasesStatusFilter !== 'all') {
        filtered = filtered.filter(r => r.status === releasesStatusFilter);
    }

    // Sort
    filtered.sort((a, b) => {
        let cmp = 0;
        if (releasesSort === 'artist') {
            cmp = a.artistName.localeCompare(b.artistName);
        } else if (releasesSort === 'release') {
            cmp = a.releaseName.localeCompare(b.releaseName);
        } else if (releasesSort === 'date') {
            cmp = new Date(a.date) - new Date(b.date);
        } else if (releasesSort === 'status') {
            const order = { draft: 0, requested: 1, in_progress: 2, complete: 3, archived: 4 };
            cmp = (order[a.status] || 0) - (order[b.status] || 0);
        }
        return releasesSortDirection === 'desc' ? -cmp : cmp;
    });

    return filtered;
}

function formatReleaseDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' });
}

function getReleaseStatusBadge(release) {
    const { status, stepsComplete, stepsTotal } = release;
    const labels = {
        draft: 'Draft', requested: 'Requested',
        in_progress: 'In Progress', complete: 'Complete', archived: 'Archived'
    };
    const cssClasses = {
        draft: 'status-draft', requested: 'status-requested',
        in_progress: 'status-in-progress', complete: 'status-complete', archived: 'status-archived'
    };
    const label = labels[status] || status;
    const cssClass = cssClasses[status] || 'status-draft';
    const counter = (status !== 'draft') ? ` ${stepsComplete}/${stepsTotal}` : '';
    return `<span class="release-status-badge ${cssClass}">${label}${counter}</span>`;
}

function updateReleasesBadge() {
    const badge = document.getElementById('navCountReleases');
    if (badge) {
        const activeCount = releases.filter(r =>
            r.status === 'requested' || r.status === 'in_progress'
        ).length;
        badge.textContent = activeCount > 0 ? activeCount : '';
    }
}

function getReleaseDetailData(release) {
    const h = hashStr(release.id + release.releaseName);
    const slug = release.artistName.toLowerCase().replace(/[^a-z0-9]/g, '');
    const artistEmail = slug + '@email.com';

    // Determine response status based on release status
    let responseStatus, responsesComplete, responsesTotal;
    if (release.status === 'complete') {
        responseStatus = 'complete';
        responsesComplete = 1;
        responsesTotal = 1;
    } else if (release.status === 'in_progress') {
        responsesComplete = release.stepsComplete > 1 ? 1 : 0;
        responsesTotal = 1;
        responseStatus = responsesComplete === responsesTotal ? 'complete' : 'submitted';
    } else if (release.status === 'draft') {
        responseStatus = 'draft';
        responsesComplete = 0;
        responsesTotal = 0;
    } else {
        responseStatus = 'draft';
        responsesComplete = 0;
        responsesTotal = 1;
    }

    // Artwork count based on status
    let artworkCount = 0;
    const artworkTotal = 5;
    if (release.status === 'complete') artworkCount = 3 + (h % 3);
    else if (release.status === 'in_progress') artworkCount = h % 3;

    const trackName = release.releaseName;
    const hasLyrics = release.status !== 'draft' && (h % 3 !== 0);
    const masterSplitsCount = 1 + (h % 3);
    const publishingSplitsCount = 1 + (h % 2);
    const sheetsConnected = (release.status === 'in_progress' || release.status === 'complete');

    const noteOptions = [
        '',
        'Need to follow up on publishing splits before release date.',
        'Artwork approved by artist. Waiting on final master.',
        'All metadata confirmed. Ready for distribution.',
        'Artist requested a delay — revisit next week.',
    ];
    const notes = release.status === 'draft' ? '' : noteOptions[h % noteOptions.length];

    return {
        ...release,
        notes,
        artistEmail,
        responseStatus,
        responsesComplete,
        responsesTotal,
        artworkCount,
        artworkTotal,
        trackName,
        hasLyrics,
        masterSplitsCount,
        publishingSplitsCount,
        sheetsConnected,
        artistInitials: release.artistName.split(' ').map(w => w[0]).join('').substring(0, 2).toUpperCase()
    };
}

function renderReleasesView() {
    const filtered = getFilteredReleases();

    // Imprint filter text
    document.getElementById('releasesImprintText').textContent =
        imprintNameMap[currentImprint] || 'All Labels';

    // Update status filter button active states
    document.querySelectorAll('.releases-status-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.relFilter === releasesStatusFilter);
    });

    // Table body
    const body = document.getElementById('releasesTableBody');
    const empty = document.getElementById('releasesEmpty');

    if (filtered.length === 0) {
        body.innerHTML = '';
        empty.style.display = 'flex';
        document.querySelector('.releases-table-header').style.display = 'none';
        return;
    }

    empty.style.display = 'none';
    document.querySelector('.releases-table-header').style.display = '';

    body.innerHTML = filtered.map(r => `
        <div class="releases-row" data-release-id="${r.id}">
            <div class="releases-cell-info">
                <div class="releases-artwork-wrap">
                    <img class="releases-artwork" src="${r.artwork}" alt="">
                </div>
                <div class="releases-text">
                    <div class="releases-release-name">${r.releaseName}</div>
                    <div class="releases-artist-name">${r.artistName}</div>
                </div>
            </div>
            <div class="releases-cell-imprint">${r.imprint}</div>
            <div class="releases-cell-date">${formatReleaseDate(r.date)}</div>
            <div class="releases-cell-status">${getReleaseStatusBadge(r)}</div>
            <div class="releases-cell-manage">
                <button class="releases-manage-btn" data-release-manage="${r.id}">Manage</button>
                <button class="releases-overflow-btn" data-release-overflow="${r.id}" title="${r.status === 'archived' ? 'Restore' : 'Archive'}">${r.status === 'archived' ? '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"/></svg>' : '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m16.5 0h-17M8.25 7.5V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 012.25 2.25v1.5"/></svg>'}</button>
            </div>
        </div>
    `).join('');

    // Wire manage button clicks
    body.querySelectorAll('.releases-manage-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            renderReleaseDetail(btn.dataset.releaseManage);
        });
    });

    // Wire overflow button clicks (archive / restore)
    body.querySelectorAll('.releases-overflow-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const release = releases.find(r => r.id === btn.dataset.releaseOverflow);
            if (!release) return;
            if (release.status === 'archived') {
                release.status = 'draft';
                showToast(`"${release.releaseName}" restored`);
            } else {
                release._prevStatus = release.status;
                release.status = 'archived';
                showToast(`"${release.releaseName}" archived`);
            }
            renderReleasesView();
        });
    });

    // Wire row clicks
    body.querySelectorAll('.releases-row').forEach(row => {
        row.addEventListener('click', () => {
            renderReleaseDetail(row.dataset.releaseId);
        });
    });

    // Update sidebar badge
    updateReleasesBadge();
}

// Releases event wiring
document.querySelectorAll('.releases-status-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        releasesStatusFilter = btn.dataset.relFilter;
        renderReleasesView();
    });
});

document.querySelectorAll('.releases-col-header[data-rel-sort]').forEach(col => {
    col.addEventListener('click', () => {
        const sortKey = col.dataset.relSort;
        if (releasesSort === sortKey) {
            releasesSortDirection = releasesSortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            releasesSort = sortKey;
            releasesSortDirection = sortKey === 'date' ? 'desc' : 'asc';
        }
        document.querySelectorAll('.releases-col-header').forEach(c => {
            c.classList.remove('sort-active', 'sort-desc');
        });
        col.classList.add('sort-active');
        if (releasesSortDirection === 'desc') col.classList.add('sort-desc');
        renderReleasesView();
    });
});

document.getElementById('releasesImprintFilter')?.addEventListener('click', (e) => {
    e.stopPropagation();
    document.getElementById('imprintDropdown').classList.toggle('open');
});

document.getElementById('releasesExternalBtn')?.addEventListener('click', () => {
    showToast('External onboarding flow — use accepted tracks to start onboarding.');
});

// ===== RELEASE DETAIL VIEW =====

function renderReleaseDetail(releaseId) {
    const release = releases.find(r => r.id === releaseId);
    if (!release) return;

    selectedRelease = releaseId;
    releaseDetailTab = 'onboarding';

    const data = getReleaseDetailData(release);
    const statusBadgeHTML = getReleaseStatusBadge(release);
    const sourceLabel = release.source === 'pipeline' ? 'From Pipeline' : 'External';

    document.getElementById('rdHeader').innerHTML = `
        <img class="rd-header-artwork" src="${data.artwork}" alt="">
        <div class="rd-header-text">
            <h2 class="rd-header-title">${data.releaseName}</h2>
            <div class="rd-header-subtitle">
                ${data.imprint}<span class="rd-header-dot">&middot;</span>${data.artistName}
            </div>
            <div class="rd-header-meta">
                ${statusBadgeHTML}
                <span class="rd-header-source">${sourceLabel}</span>
            </div>
        </div>
    `;

    document.querySelectorAll('.rd-tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.rdTab === releaseDetailTab);
    });

    renderReleaseTabContent(data);

    document.querySelector('#releasesView .releases-scroll').style.display = 'none';
    document.getElementById('releaseDetailView').classList.add('active');
}

function renderReleaseTabContent(data) {
    const content = document.getElementById('rdContent');
    if (releaseDetailTab === 'onboarding') {
        content.innerHTML = renderReleaseOnboardingTab(data);
    } else {
        content.innerHTML = renderReleaseArtworkTab(data);
    }
    wireReleaseDetailEvents(data);
}

function renderReleaseOnboardingTab(data) {
    const lyricsStatusClass = data.hasLyrics ? 'lyrics-received' : (data.status === 'draft' ? 'lyrics-none' : 'lyrics-pending');
    const lyricsStatusText = data.hasLyrics ? 'Received' : (data.status === 'draft' ? 'No lyrics' : 'Pending');

    const sheetsStatusHTML = data.sheetsConnected
        ? '<span class="rd-export-status"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="12" height="12"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg> Connected</span>'
        : '<span class="rd-export-status disconnected">Not connected</span>';

    const responseBadgeClass = (data.responsesTotal > 0 && data.responsesComplete === data.responsesTotal) ? 'badge-complete' : 'badge-pending';

    const responseStatusText = data.responseStatus === 'complete'
        ? 'All responses submitted'
        : data.responseStatus === 'submitted'
            ? 'Partially submitted'
            : 'Awaiting response';

    return `
        <div class="rd-section">
            <div class="rd-section-header">
                <span class="rd-section-label">Release Onboarding</span>
                <button class="rd-btn-secondary" data-rd-action="edit-onboarding">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"/></svg>
                    Edit onboarding form
                </button>
            </div>
            <div class="rd-onboarding-summary">
                ${data.status === 'draft'
                    ? 'Onboarding form has not been configured yet. Click "Edit onboarding form" to set up questions for the artist.'
                    : 'Onboarding form is active. Artist responses and release assets are being collected below.'}
            </div>
        </div>

        <div class="rd-section">
            <div class="rd-section-header">
                <span class="rd-section-label">Exports</span>
            </div>
            <div class="rd-export-row">
                <div class="rd-export-label">
                    <div class="rd-export-icon">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125"/></svg>
                    </div>
                    <div class="rd-export-info">
                        <div class="rd-export-name">Google Sheets</div>
                        <div class="rd-export-desc">Sync release data to a shared label spreadsheet</div>
                    </div>
                </div>
                <div class="rd-export-actions">
                    ${sheetsStatusHTML}
                    <button class="rd-btn-secondary" data-rd-action="sheets-export">Export</button>
                </div>
            </div>
            <div class="rd-export-row">
                <div class="rd-export-label">
                    <div class="rd-export-icon">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>
                    </div>
                    <div class="rd-export-info">
                        <div class="rd-export-name">File Export</div>
                        <div class="rd-export-desc">Download release data as CSV or structured format</div>
                    </div>
                </div>
                <div class="rd-export-actions">
                    <button class="rd-btn-ghost" data-rd-action="export-csv">CSV</button>
                    <button class="rd-btn-ghost" data-rd-action="export-structured">Structured</button>
                    <button class="rd-btn-secondary" data-rd-action="file-export">Export</button>
                </div>
            </div>
        </div>

        <div class="rd-section">
            <div class="rd-section-header">
                <span class="rd-section-label">Release Notes</span>
            </div>
            <textarea class="rd-notes-textarea" id="rdNotesTextarea" placeholder="Add notes about this release..." maxlength="5000">${data.notes}</textarea>
            <div class="rd-notes-footer">
                <span class="rd-notes-counter" id="rdNotesCounter">${data.notes.length}/5000</span>
                <div class="rd-notes-actions">
                    <button class="rd-btn-ghost" data-rd-action="clear-notes">Clear</button>
                    <button class="rd-btn-primary" data-rd-action="save-notes">Save notes</button>
                </div>
            </div>
        </div>

        <div class="rd-section">
            <div class="rd-section-header">
                <span class="rd-section-label">Artist Responses</span>
                <span class="rd-response-badge ${responseBadgeClass}">${data.responsesComplete}/${data.responsesTotal} completed</span>
            </div>
            ${data.responsesTotal > 0 ? `
            <div class="rd-response-card" data-rd-action="show-response">
                <div class="rd-response-avatar">${data.artistInitials}</div>
                <div class="rd-response-info">
                    <div class="rd-response-email">${data.artistEmail}</div>
                    <div class="rd-response-status">${responseStatusText}</div>
                </div>
                <svg class="rd-response-chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </div>
            ` : '<div class="rd-onboarding-summary">No artist responses configured for this draft release.</div>'}
        </div>

        <div class="rd-section">
            <div class="rd-section-header">
                <span class="rd-section-label">Track Lyrics</span>
            </div>
            <div class="rd-lyrics-track">
                <div class="rd-lyrics-name">${data.trackName}</div>
                <span class="rd-lyrics-badge ${lyricsStatusClass}">${lyricsStatusText}</span>
                <div class="rd-lyrics-splits">
                    <span>
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="12" height="12"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303"/></svg>
                        Master: ${data.masterSplitsCount}
                    </span>
                    <span>
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="12" height="12"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/></svg>
                        Publishing: ${data.publishingSplitsCount}
                    </span>
                </div>
            </div>
        </div>
    `;
}

function renderReleaseArtworkTab(data) {
    const hasArtwork = data.artworkCount > 0;

    let artworkContentHTML;
    if (hasArtwork) {
        const items = [];
        for (let i = 0; i < data.artworkCount; i++) {
            items.push(`
                <div class="rd-artwork-item">
                    <img src="${data.artwork}" alt="Artwork ${i + 1}">
                </div>
            `);
        }
        artworkContentHTML = '<div class="rd-artwork-grid">' + items.join('') + '</div>';
    } else {
        artworkContentHTML = `
            <div class="rd-artwork-empty">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 002.25-2.25V5.25a2.25 2.25 0 00-2.25-2.25H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21zm16.5-13.5h.008v.008h-.008V7.5zm0 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/></svg>
                <div class="rd-artwork-empty-title">No artwork uploaded yet</div>
                <div class="rd-artwork-empty-desc">Upload release artwork to get started. Accepted formats: JPG, PNG. Recommended: 3000&times;3000px.</div>
            </div>
        `;
    }

    return `
        <div class="rd-section">
            <div class="rd-artwork-header">
                <span class="rd-artwork-counter">Release Artwork &middot; ${data.artworkCount}/${data.artworkTotal}</span>
                <div class="rd-artwork-actions">
                    <button class="rd-btn-ghost" data-rd-action="copy-link">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="14" height="14"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
                        Copy Link
                    </button>
                    <button class="rd-btn-ghost" data-rd-action="preview-artwork">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="14" height="14"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                        Preview
                    </button>
                    <button class="rd-btn-primary" data-rd-action="upload-artwork">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/></svg>
                        Upload
                    </button>
                </div>
            </div>
            ${artworkContentHTML}
        </div>
    `;
}

function wireReleaseDetailEvents(data) {
    const textarea = document.getElementById('rdNotesTextarea');
    const counter = document.getElementById('rdNotesCounter');
    if (textarea && counter) {
        textarea.addEventListener('input', () => {
            counter.textContent = textarea.value.length + '/5000';
        });
    }

    document.querySelectorAll('[data-rd-action]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const action = btn.dataset.rdAction;
            switch (action) {
                case 'edit-onboarding':
                    showToast('Edit onboarding form');
                    break;
                case 'sheets-export':
                    showToast('Exported to Google Sheets', 'accept');
                    break;
                case 'file-export':
                    showToast('File exported successfully', 'accept');
                    break;
                case 'export-csv':
                    showToast('CSV format selected');
                    break;
                case 'export-structured':
                    showToast('Structured format selected');
                    break;
                case 'save-notes':
                    showToast('Release notes saved', 'accept');
                    break;
                case 'clear-notes':
                    if (textarea) {
                        textarea.value = '';
                        if (counter) counter.textContent = '0/5000';
                    }
                    showToast('Notes cleared');
                    break;
                case 'show-response':
                    showToast('Viewing response from ' + data.artistEmail);
                    break;
                case 'copy-link':
                    showToast('Artwork link copied to clipboard');
                    break;
                case 'preview-artwork':
                    showToast('Artwork preview');
                    break;
                case 'upload-artwork':
                    showToast('Upload artwork');
                    break;
            }
        });
    });
}

function showReleasesList() {
    selectedRelease = null;
    document.getElementById('releaseDetailView').classList.remove('active');
    document.querySelector('#releasesView .releases-scroll').style.display = '';
}

// Back button
document.getElementById('releaseBackBtn').addEventListener('click', showReleasesList);

// Tab switching
document.querySelectorAll('.rd-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        releaseDetailTab = btn.dataset.rdTab;
        document.querySelectorAll('.rd-tab-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.rdTab === releaseDetailTab);
        });
        const release = releases.find(r => r.id === selectedRelease);
        if (release) {
            const data = getReleaseDetailData(release);
            renderReleaseTabContent(data);
        }
    });
});

// ===== INIT =====
updateConversationBadges();
updateReleasesBadge();
updateCount(); // Populate sidebar stage badges on load
switchView('dashboard');
startProgressLoop();
