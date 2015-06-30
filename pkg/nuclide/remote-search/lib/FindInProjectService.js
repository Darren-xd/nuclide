'use babel';
/* @flow */

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

class FindInProjectService {
  search(
    directory: NuclideUri,
    regex: string
  ): Promise<Array<{
    filePath: NuclideUri;
    matches: Array<{lineText: string; lineTextOffset: number; matchText: string; range: Array<Array<number>>}>;
  }>> {
    return Promise.reject('Not implemented');
  }
}

module.exports = FindInProjectService;
