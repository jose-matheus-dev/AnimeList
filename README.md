# AnimeList

### Deploy: https://animelist-dev.vercel.app/

_Clone the repository:_
```
git clone https://github.com/jose-matheus-dev/AnimeList.git
cd AnimeList
```
## Local Development with Docker Compose Watch
**Requirements:** Ensure Docker and Docker Compose are installed.

### Usage:
Start the development environment by running any of the following commands:

<table align="center">
    <tr>
        <td>
          <sub><sub>
            <pre><code><kbd>pnpm docker</kbd></code></pre>
          </sub></sub>
        </td>
      <td>
        <sub><sub>
          <pre><code><kbd>docker compose up --build --watch</kbd></code></pre>
        </sub></sub>
      </td>
      <td>
        <sub><sub>
          <pre><code><kbd>docker compose watch</kbd></code></pre>
        </sub></sub>
      </td>
    </tr>
</table>

---
Once started, access the AnimeList at http://localhost:5173.

> [!NOTE]
> For more information about file watch, refer to the <code>[Docker Compose Watch](https://docs.docker.com/compose/how-tos/file-watch/)</code> documentation.