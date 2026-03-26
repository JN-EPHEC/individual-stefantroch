# Fix VPS Dist Deployment - Progress Tracker

## Steps (from plan):
- [ ] 1. Update server/package.json: Add client build deps/scripts, prod start.
- [ ] 2. Update server/Dockerfile: Multi-stage build client → copy dist to public, prod server.
- [ ] 3. Rebuild/test Docker locally: docker build -t app . && docker run -p 3000:3000 app
- [ ] 4. Push/deploy to VPS.
- [ ] 5. Verify: Frontend + APIs work.

Current: Starting step 1.

